require('dotenv').config();
const acronymList = require('./acronyms.js');
const util = require('util');
const Bot = require('slackbots');
const _ = require('lodash');

const Roz = function Constructor (settings) {
  this.settings = settings;
  this.settings.name = this.settings.name || 'Roz';
  this.user = null;
};

util.inherits(Roz, Bot);

Roz.prototype.run = function () {
  Roz.super_.call(this, this.settings);

  this.on('start', this.onStart);
  this.on('message', this.onMessage);
};

Roz.prototype.onStart = function () {
  this.loadBotUser();
};

Roz.prototype.loadBotUser = function () {
  const self = this;
  this.user = this.users.filter(function (user) {
    return user.name === self.name;
  })[0];
};

Roz.prototype.onMessage = function (message) {
  if (this.isChatMessage(message) &&
      this.isChannelConversation(message) &&
      !this.isFromRozBot(message)) {
    this.checkIfUsingAcronym(message);
  }
};

Roz.prototype.isChatMessage = function (message) {
  return message.type === 'message' && Boolean(message.text);
};

Roz.prototype.isChannelConversation = function (message) {
  return typeof message.channel === 'string' &&
    message.channel[0] === 'C';
};

Roz.prototype.isFromRozBot = function (message) {
  return message.user === this.user.id;
};

Roz.prototype.checkIfUsingAcronym = function (message) {
  let acronymsBeingUsed = this.checkIfAcronymsAreBeingUsed(message.text);
  if (acronymsBeingUsed.length > 0) {
    let acronymDefinitions = this.defineAcronymsBeingUsed(acronymsBeingUsed);
    this.replyWithMessage(message, acronymDefinitions);
  }
};

Roz.prototype.checkIfAcronymsAreBeingUsed = function (messageText) {
  const arrayOfUsersWords = messageText.toUpperCase().replace(/[^a-zA-Z0-9]/g, ' ').split(' ');
  const acronymsUsed = _.filter(arrayOfUsersWords, function (word) {
    return acronymList[word];
  });
  return acronymsUsed;
};

Roz.prototype.defineAcronymsBeingUsed = function (arrayOfAcronyms) {
  let definitions = arrayOfAcronyms.map(function (acronym) {
    return acronymList[acronym];
  });
  return definitions.join(', ');
};

Roz.prototype.replyWithMessage = function (originalMessage, acronymsBeingUsed) {
  const self = this;
  const channel = self.getChannelById(originalMessage.channel);
  let formattedMessage = `Stop Using Acronyms: ${acronymsBeingUsed}`;
  self.postMessageToChannel(channel.name, formattedMessage,
                           { asuser: true, icon_emoji: ':no_entry_sign:' }
                           );
};

Roz.prototype.getChannelById = function (channelId) {
  return this.channels.filter(
    function (item) {
      return item.id === channelId;
    }
  )[0];
};

module.exports = Roz;

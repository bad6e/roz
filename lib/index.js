require('dotenv').config();
const util = require('util');
const path = require('path');
const fs = require('fs');
const Bot = require('slackbots');
const _ = require('lodash');
pry = require('pryjs')

const ACRONYMS = {'AFK': 'Away from Keyboard',
                  'BRB': 'Be Right Back',
                  'LOLZ': 'Laugh out Loud ZZ' ,
                  'TLDR': 'Too Long Did Not Read',
                  'GTG': 'Got to Go'
                 }

const Roz = function Constructor(settings) {
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
      !this.isFromRozBot(message))
      {
        this.checkIfUsingAcronym(message)
      }
};

Roz.prototype.checkIfUsingAcronym = function(message) {
  let acronymBeingUsed = this.isUsingAnAcronym(message);
  if (acronymBeingUsed) {
    this.replyWithMessage(message, this.defineAcronym(acronymBeingUsed))
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

Roz.prototype.isUsingAnAcronym = function (message) {
  const arrayOfUsersWords = message.text.toUpperCase().split(' ')
  const definition = _.find(arrayOfUsersWords, function(word) {
    return ACRONYMS[word]
  })
  return definition
};

Roz.prototype.defineAcronym = function (acronym) {
  const definition = _.map([acronym], function(word) {
    return ACRONYMS[word]
  })
  return definition
};

Roz.prototype.replyWithMessage = function (originalMessage, acronymDefinition) {
  const self = this;
  const channel = self.getChannelById(originalMessage.channel);
  formattedMessage = `Stop Using Acronyms: ${acronymDefinition}`
  self.postMessageToChannel(channel.name, formattedMessage, { asuser: true });
};

Roz.prototype.getChannelById = function (channelId) {
    return this.channels.filter(
      function (item) {
        return item.id === channelId;
      }
    )[0];
};

module.exports = Roz;
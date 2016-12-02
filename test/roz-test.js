const chai = require('chai');
const assert = chai.assert;

const Roz = require('../lib/index');
const Fixtures = require('./fixtures.js')

pry = require('pryjs')

describe('ROZ', function () {

  beforeEach(function() {
    this.roz = new Roz ({
      token: 'abc123',
      name: 'roz'
    })
    this.fixtures = new Fixtures ({})
  });

  it('should instantiate a new Roz - the Acronym Slayer', function () {
    assert.isObject(this.roz);
  });

  it('should instantiate Roz with settings - a token and a name', function () {
    assert.isDefined(this.roz.settings, 'settings have been defined');
  });

  it('should check if it is a chat message', function () {
    let isMessage = this.roz.isChatMessage(this.fixtures.message);
    assert.equal(isMessage, true);
  });

  it('should check to see if the message is coming from Roz', function () {
    this.roz.user = this.fixtures.userRoz
    let isFromRoz = this.roz.isFromRozBot(this.fixtures.messageFromRoz);
    assert.equal(isFromRoz, true);
  });

  it('should check if the conversation is occurring in a channel', function () {
    let isMessage = this.roz.isChannelConversation(this.fixtures.message);
    assert.equal(isMessage, true);
  });

  it('should check if a message contains an acronym and return definition', function () {
    let acronymDefinitionOne = this.roz.checkAndDefineAcronym(this.fixtures.textOne);
    assert.equal(acronymDefinitionOne, 'Cost per click');

    let acronymDefinitionTwo = this.roz.checkAndDefineAcronym(this.fixtures.textTwo);
    assert.equal(acronymDefinitionTwo, 'Too long, didn’t read');
  });

  it('should use a channel id to return a specific channel id', function () {
    this.roz.channels = this.fixtures.channels
    let channel = this.roz.getChannelById('C13FS65L7');
    assert.equal(channel.id, 'C13FS65L7');
  });
})

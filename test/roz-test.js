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

  it('should check if a message contains an acronym and return definition', function () {
    let acronymDefinitionOne = this.roz.checkAndDefineAcronym(this.fixtures.textOne);
    assert.equal(acronymDefinitionOne, 'Cost per click');

    let acronymDefinitionTwo = this.roz.checkAndDefineAcronym(this.fixtures.textTwo);
    assert.equal(acronymDefinitionTwo, 'Too long, didn’t read');
  });
})

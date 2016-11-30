#!/usr/bin/env node
'use strict';

/**
 * Roz - Kills and Define Acronym usage
 *
 * @author Bret Doucette <doucette.bret@gmail.com>
 * Special thanks to Luciano Mammino
 */

const Roz = require('../lib/index');

const token = process.env.BOT_API_KEY || require('../token');
const name = process.env.BOT_NAME;

const rozbot = new Roz({
    token: token,
    name: name
});

rozbot.run();

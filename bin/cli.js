#!/usr/bin/env node
import minimist from 'minimist';
import roll from '../lib/roll.js';


const args = minimist(process.argv.slice(2));


var message_in_sides = 6;
if (args.sides) {
    message_in_sides = args.sides;
}
var message_in_dice = 2;
if (args.dice) {
    message_in_dice = args.dice;
}
var message_in_rolls = 1;
if (args.rolls) {
    message_in_rolls = args.rolls;
}

const message_out = roll(message_in_sides,message_in_dice,message_in_rolls);


console.log(JSON.stringify(message_out));

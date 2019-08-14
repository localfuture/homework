//jshint esversion:6
var colors = require('colors');
var gameOfThronesNames = require("game_of_thrones-names");
const ora = require('ora');
const timestamp = require('time-stamp');
const tb = require('terminal-banner').terminalBanner;

console.log('OMG Rainbows!'.rainbow);
console.log('OMG Rainbows!'.zebra);
console.log("GoT character name : "+gameOfThronesNames.random());

console.log(timestamp('YYYY/MM/DD:mm:ss'));


tb('An experiment with 5 NPM modules');

const throbber = ora({
  text: 'Rounding up all the reptiles',
  spinner: {
    frames: ['🐊', '🐢', '🦎', '🐍'],
    interval: 300, // Optional
  },
}).start();

// Simulating some asynchronous work for 10 seconds...
setTimeout(() => {
  throbber.stop();
}, 1000 * 3);

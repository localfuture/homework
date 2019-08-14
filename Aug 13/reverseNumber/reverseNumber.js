//jshint esversion:6

const revNum = require("./reverseNumberModule");

var r = Math.floor(1000 + (10000 - 1000) * Math.random());
console.log("Number : "+ r);
console.log("Reverse : "+ revNum.reverseNumber(r));

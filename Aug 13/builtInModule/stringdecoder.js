var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('Anand Alex');

console.log(b);
console.log(d.write(b));

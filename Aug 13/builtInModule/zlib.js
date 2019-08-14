var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('demo.txt');
var w = fs.createWriteStream('demo2.txt.gz');
r.pipe(gzip).pipe(w);

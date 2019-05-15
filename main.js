var postcss = require("postcss");
var spiffing = require("postcss-spiffing");
var fs = require("fs");

var css = fs.readFileSync("source.css");

console.log(postcss(spiffing()).process(css).css);
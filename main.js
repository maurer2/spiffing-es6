import postcss from 'postcss';
import spiffing from 'postcss-spiffing';
import * as fs from 'fs';

const css = fs.readFileSync('random.css');

console.log(postcss(spiffing()).process(css).css);

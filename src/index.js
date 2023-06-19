import { readFileSync, readdirSync } from 'fs';
import { ModType } from './mod/ModType';
const Modules: any = [];
let outStr: String = "//Redditlang Interpreter v0\n";

Modules.push();

readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const output = require('./mod/System').method(line);
    outStr += output+"\n";
});
console.log(outStr);
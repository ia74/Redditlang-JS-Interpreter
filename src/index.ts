import { readFileSync, readdirSync } from 'fs';
import { ModType } from './mod/ModType';
const Modules: ModType[] = [];
let outStr: String = "//Redditlang Interpreter v0";

Modules.push(require('./mod/System'));

readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line

    Modules.forEach(mod => {
        if(mod.name == "System") {
            const output = mod.method(line);
        }
    })


});
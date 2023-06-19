import { readFileSync, readdirSync } from 'fs';
import { ModType } from './mod/ModType';
const Modules: Map<String, ModType> = new Map();

Modules.set("System", require('./mod/System'));

readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const Sys = Modules.get("System");
    Sys.method(line);

});
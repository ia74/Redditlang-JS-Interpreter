const fs = require('fs');
let outStr = "//Redditlang Interpreter v0\n";

fs.readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const output = require('./mod/System').method(line);
    outStr += output+"\n";
});
console.log(outStr);
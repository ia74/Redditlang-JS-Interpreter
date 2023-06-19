const fs = require('fs');
let outStr = `
a = require('prompt-sync')()
const delay = ms => new Promise(res => setTimeout(res, ms));
`;

fs.readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const output = require('./mod/System').method(line);
    String(output).trim();
    if(String(output).startsWith("undefined") || output == "") return;
    outStr += output+"\n";
});

fs.writeFileSync('main.redditlang.out.js', outStr)

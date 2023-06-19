const fs = require('fs');
const checkMonday = require('./SegfaultOnMonday');
let outStr = `
a = require('prompt-sync')()
const delay = ms => new Promise(res => setTimeout(res, ms));
b = () => {const today = new Date().getDay();if(today == 1) {console.log('Segmentation fault (core dumped)');process.exit(1);} else {return;}};
b()
`;

checkMonday();

fs.readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const output = require('./mod/System').method(line);
    String(output).trim();
    if(String(output).startsWith("undefined") || output == "") return;
    outStr += output+"\n";
});

fs.writeFileSync('main.redditlang.out.js', outStr)

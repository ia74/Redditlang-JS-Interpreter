const DEBUG_MODE = true;
const dbglog = (m, f="Debugger") => { if(DEBUG_MODE) { console.log(`[Debug/${f}] ${m}`) } }

const fs = require('fs');
const checkMonday = require('./SegfaultOnMonday');
let outStr = `
a = require('prompt-sync')()
const delay = ms => new Promise(res => setTimeout(res, ms));
b = () => {const today = new Date().getDay();if(today == 1) {num = Math.random();if (num > 0.5) {console.log('Mondays amirite?');process.stderr.write('Segmentation fault (core dumped)');process.exit(139);} else {return;}}};
b()
`;

dbglog('Checking if today is Monday/Sunday..')
checkMonday();
dbglog('Check passed, starting compilation')

fs.readFileSync("main.redditlang").toString().split('\n').forEach(line => {
    // Parse the line
    const output = require('./mod/System').method(line);
    String(output).trim();
    if(String(output).startsWith("undefined") || output == "") return;
    outStr += output+"\n";
});

fs.writeFileSync('main.out.js', outStr)
console.log('Wrote output to main.out.js!')
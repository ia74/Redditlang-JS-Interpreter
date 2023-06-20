const DEBUG_MODE = true;
const dbglog = (m, f="Debugger") => { if(DEBUG_MODE) { console.log(`[Debug/${f}] ${m}`) } }

const fs = require('fs');
const checkMonday = require('./util/SegfaultOnMonday');
const path = require('path');
let outStr = `
a = require('prompt-sync')()
const delay = ms => new Promise(res => setTimeout(res, ms));
b = () => {const today = new Date().getDay();if(today == 1) {num = Math.random();if (num > 0.5) {console.log('Mondays amirite?');process.stderr.write('Segmentation fault (core dumped)');process.exit(139);} else {return;}}};
b()
`;

dbglog('Checking if today is Monday/Sunday..')
checkMonday();
dbglog('Check passed, starting compilation')

const modList = [
    require('./mod/System'),
    require('./mod/Modularity')
];

const parseList = [
    // THESE MUST BE IN ORDER OF REQUIRE!
    {path: path.resolve(__dirname, "./rlFiles/moduletest.redditlang"), name: 'moduletest'},
    {path: path.resolve(__dirname, "./rlFiles/main.redditlang"), name: 'main'}
]

parseList.forEach(f => {
    fs.readFileSync(f.path).toString().split('\n').forEach(line => {
        // Parse the line
        modList.forEach(mod => {
            const fileData = {};
            const output = mod.method(line, fileData);
            if(typeof output == "object") {
                console.log(output)
                fileData[output.data.key] = output.data.value
                if(output.data.codestr) {
                    String(output.data.codestr).trim();
                    if(String(output.data.codestr).startsWith("undefined") || output.data.codestr == "") return;
                    outStr += output.data.codestr+"\n";
                }
                return;
            }
            String(output).trim();
            if(String(output).startsWith("undefined") || output == "") return;
            outStr += output+"\n";
        })
    });
    fs.writeFileSync(f.name+'.out.js', outStr)
    console.log('Wrote output to main.out.js!')
})
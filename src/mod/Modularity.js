const path = require('path')

module.exports = {
    name: "Modularity",
    method: (line, fileData) => {
        const keyword = line.split(' ')[0];
        const args = line.split(' ');
        if (keyword.startsWith("subred")) {
            return {data: {codestr: `const RL_MOD_${args[1].trim()} = {};`, key: 'NAMESPACED_FILE', value: args[1]}}
        } else 
        if (keyword.startsWith("export")) {
            return `module.exports = {${args.splice(1, args.length).join(',')}}`
        } else 
        if (keyword.startsWith("bringme")) {
            // uh oh. we're requesting a file..
            const fileToGet = path.resolve(__dirname, '../../'+args[1].split('.')[0]+'.out.js'); // We know its in src/rlFiles though
            return `require('${fileToGet.split('.')[0].replace(/\\/g, "\\\\")}.out.js')`
        }
    }
}

function randLetter(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
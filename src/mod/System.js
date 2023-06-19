module.exports = {
    name: "System",
    method: (line) => {
        const keyword = line.split(' ')[0];
        const args = line.split(' ');
        // Remove comments just cause
        if (line.startsWith('#')) {
            return ``
        } else if (line.includes('#')) {
            line = line.split('#')[0];
        }

        if (line.includes('okbud')) {
            line = line.replace(/okbud/g, 'true')
        }
        if (line.includes('okn\'tbud')) {
            line = line.replace(/okn'tbud/g, 'false')
        }
        if (line.includes('wut')) {
            line = line.replace(/wut/g, 'null')
        }


        if (line.startsWith('extuse')) {
            // Loading an extension, is it from us?
            if (args[0].startsWith('js_')) {
                // yippee it's from us!
                return "require('" + args[0] + "')";
            } else {
                return; // The extension is not going to be used here
            }
        } else if (line.startsWith('coitusinterruptus')) {
            const startStr = line.split("'")[1];
            return "console.log('" + startStr + "')"
        } else if (line.startsWith('is')) {
            // yummy conditaitonal
            const checking = line.split('is ')[1].trim();
            const conds = checking.split(' ');
            return `if (${conds[0]} == ${conds[1]}) {`
        } else if(line.startsWith("si")) {
            return `}`
        }
    }
}
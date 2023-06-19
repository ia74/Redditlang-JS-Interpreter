module.exports = {
    name: "System",
    method: (line) => {
        const keyword = line.split(' ')[0];
        const args = line.split(' ');
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
        }
    }
}
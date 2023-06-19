class Mod {
    public name: String;
    public method: () => void;

    constructor(name: String, method: () => void) {
        this.name = name;
        this.method = method;
    }
}

module.exports = Mod;
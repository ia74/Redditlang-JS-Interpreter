export type ModType = {
    name: String;
    method: (line: String) => void;
}
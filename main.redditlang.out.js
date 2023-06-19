
a = require('prompt-sync')()
const delay = ms => new Promise(res => setTimeout(res, ms));
let apple = true 
orange = a('');
console.log(orange)
a = async () => { while(true) {
if (apple == null) {
console.log('Apple is null :(')
}
if (apple == false) {
console.log('Apple is false :(')
}
if (apple == true) {
console.log('Hello world')
}
await delay(2)
} }; a()
console.log('We need')

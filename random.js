const exec = require("child_process").exec;
const fs = require("fs")
const files = fs.readdirSync("./memes")
let array = [] /* wiem, pewnie mozna lepiej */
for(let file of files) {
    array.push(file)
}

if(array.length < 10) return console.log('W folderze z memami musi znajdowac sie co najmniej 10 smiesznych obrazków.')

console.log('Otwieranie losowego meme');

exec(`start ./memes/${array[Math.floor(Math.random() * array.length)]}`)
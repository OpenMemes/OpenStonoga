//UPEWNIJ SIĘ, ŻE PRZED POBRANIEM NOWYCH MEMÓW FOLDER MEMES JEST PUSTY!
const fs = require("fs")
const files = fs.readdirSync("../memes")
let i = 0
for(let file of files) {
    fs.renameSync("../memes/" + file, `../memes/${i}.jpg`)
    ++i
}
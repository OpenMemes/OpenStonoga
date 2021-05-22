const list = require("./blasty.json")
const fetch = require("node-fetch")
const fs = require("fs")
let i = 0
list.forEach(a=>{
    fetch(a).then(async img =>{
        img = await img.buffer()
        fs.writeFileSync(`./memes/blasty${i}.jpg`, img)
        i++
    })
})
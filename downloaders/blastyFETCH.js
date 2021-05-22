console.log("Ponieważ nie chce jebać mi się z awaitami, kod MUSI w ciągu 15 sekund pobrać wszystkie urle i wrzucić do arraya.")
const fetch = require("node-fetch")
const fs = require("fs")
let images = []
let pages = 3 //hardcodowane 3 strony, :(
for (let i = 1; i <= pages; i++) {
    fetch(`https://www.blasty.pl/tag/zbigniew-stonoga/${i}`).then(async a => {
        console.log(i)
        a = await a.text()
        a = a.replace(/<img/g, "\n<img")
        a.split(/\r\n|\r|\n/).forEach(c => {
            if (c.includes("src=\"https://www.blasty.pl/upload/images/large")) {
                const firstStage = c.substring(c.indexOf("src=") + 5)
                const lastStage = firstStage.substring(0, firstStage.indexOf(".jpg") +4);
                images.push(lastStage)
            }
        })
    })
}
setTimeout(function () {
    fs.writeFileSync("./blasty.json", JSON.stringify(images, null, 3))
    console.log("Zapisano URLe memów do Dżejsona.")
}, 15 * 1000)

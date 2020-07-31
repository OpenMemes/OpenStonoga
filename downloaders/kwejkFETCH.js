console.log("Ponieważ nie chce jebać mi się z awaitami, kod MUSI w ciągu 15 sekund pobrać wszystkie urle i wrzucić do arraya.")
const fetch = require("node-fetch")
const {parse} = require("node-html-parser")
const fs = require("fs")
let images = []
fetch("https://kwejk.pl/tag/stonoga").then(async a => {
    a = a.text();
    const page = parse(await a)
    const pages = Number(page.querySelector("li.current a").childNodes[0].rawText)
    if (!pages) return console.log("Nie wykryto memów ze Zbysiem na Kwejku.")
    console.log(`Wykryto ${pages} stron memów ze Zbysiem na Kwejku.`)
    for (let i = 1; i <= pages; i++) {
        fetch(`https://kwejk.pl/tag/stonoga/strona/${i}`).then(async b => {
            console.log(`Zbieranie strony ${i} z ${pages}.`)
            b = b.text()
            b = await b
            b = b.replace(/<img  width/g, "\n<img  width")
            b.split(/\r\n|\r|\n/).forEach(c => {
                if (c.includes("@load=\"imageLoaded\" src=\"https://i1.kwejk.pl/k/obrazki/")) {
                    const firstStage = c.substring(c.indexOf("src=") + 5)
                    const lastStage = firstStage.substring(0, firstStage.indexOf(".jpg") + 4);
                    images.push(lastStage)
                }
            })
        })
    }
})
setTimeout(function () {
    fs.writeFileSync("./kwejk.json", JSON.stringify(images, null, 3));
    console.log("Zapisano URLe memów do Dżejsona.")
}, 15 * 1000)
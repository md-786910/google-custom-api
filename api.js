const express = require('express')
const request = require('request-promise')
const app = express()
const port = 3000 || process.env.PORT

// const api_key = "1a256cf5aa35208fec860a66c187d4e9"

const generateApi = (api_key) => `https://api.scraperapi.com?api_key=${api_key}`

const api = "AIzaSyBKdZAKB0UhsKpGhaGuhdhvSK7E20dRI1g";
const cx = "6012b95f04c67305b"


app.get("/", (req, res) => {
    res.send("hello world")
})
smp - google - custom - search - api
app.get("/search/:query", async (req, res) => {
    try {
        const { query } = req.params
        const { api_key } = req.query
        const response = await request(`${generateApi(api_key)}&autoparse=true&url=https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${query}&limit=40`)
        res.send(JSON.parse(response));
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => console.log('listening on port'))

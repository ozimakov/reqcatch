const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3000
const max_messages = 100

let messages = []

app.get('/', (req, res) => {
    res.contentType("application/json")
    res.send(messages.slice().reverse())
})

app.post('/', (req, res) => {
    if (req.body) {
        messages = messages.concat({
            time: Date.now(),
            message: req.body
        })
        if (messages.length > max_messages) {
            messages = messages.slice(messages.length - max_messages)
        }
        res.status(201)
        res.send("Request received");
    } else {
        res.status(400)
        res.send("No request body provided")
    }
})

app.delete("/", (req, res) => {
    messages = []
    res.status(200)
    res.send("Requests have been deleted")
})

app.listen(port, () => {
    console.log(`ReqCatch server is listening at port ${port}`)
})

const express = require("express")
const cors = require("cors")
const winchesterRouter = require("./winchester/winchester-router")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use("/winchester", winchesterRouter)
server.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Supernatural API",
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Can't tell you what, but something went wrong here."
    })
})

if (!module.parent){
    server.listen(port, () => {
        console.log(`API running on http://localhost:${port}.`)
    })
}

module.exports = server
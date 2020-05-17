const express = require("express")
const Winchesters = require("./winchester-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Winchesters.find())
    } catch(err) {
        next(err)
    }
})
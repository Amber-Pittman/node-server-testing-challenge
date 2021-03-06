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

router.get("/winchesters/:id", async (req, res, next) => {
    try {
        const winchesters = await Winchesters.findById(req.params.id)

        if(!winchesters) {
            res.status(404).json({
                message: "This Winchester not found."
            })
        }
        res.json(winchesters)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const winchesters = await Winchesters.createNewWinchester(req.body)
        
        res.status(201).json(winchesters)
    } catch(err) {
        next(err)
    }
})

module.exports = router
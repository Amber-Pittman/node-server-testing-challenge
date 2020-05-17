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
        const winchester = await Winchesters.findById(req.params.id)

        if(!winchester) {
            res.status(404).json({
                message: "This Winchester not found."
            })
        }
    } catch(err){
        next(err)
    }
})


module.exports = router
const db = require("../data/config")

function find() {
    return db("winchesters")
}

function findById(id) {
    return db("winchesters").where("id", id).first()
}

async function createNewWinchester(newWinchester) {
    const [id] = await db("winchesters").insert(newWinchester)
    return findById(id)
}

module.exports = {
    find,
    findById,
    createNewWinchester,
}
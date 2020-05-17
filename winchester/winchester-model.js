const db = require("../data/config")

function find() {
    return db("winchesters")
}

function findById(id) {
    return db("winchesters").where("id", id).first()
}

module.exports = {
    find,
    findById,
}
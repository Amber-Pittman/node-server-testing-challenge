const db = require("../data/config")

function find() {
    return db("winchesters")
}

module.exports = {
    find,
}
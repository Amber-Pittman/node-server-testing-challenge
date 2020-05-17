const supertest = require("supertest")
const server = require("../index")
// Gets rid of test leaking
const db = require("../data/config");

// Fresh database to test against for every single test
beforeEach(async () => {
    await db.seed.run()
})
// Gets rid of test leaking
afterAll(async () => {
    await db.destroy()
})

test("GET /", async () => {
    // ARRANGE
    const endpoint = "/"
    const status = 200

    // ACT
    const res = await supertest(server).get("/")

    // ASSERT
    expect(res.statusCode).toBe(status)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
})
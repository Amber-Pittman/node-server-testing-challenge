const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("Winchester Integration Tests", () => {
    it("GET /winchesters", async () => {
        const res = await supertest(server).get("/winchesters")

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })
})
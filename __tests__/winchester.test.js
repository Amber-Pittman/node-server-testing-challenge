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

    it("GET /winchesters/:id", async () => {
        const res = await supertest(server).get("/winchesters/1")

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toMatch(/Dean Winchester/i)
        expect(res.body.role).toBe("hunter")
        expect(res.body.death_count).toBe(112)
    })
})
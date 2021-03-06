const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

// Jest Hook
afterAll(async () => {
    await db.destroy()
})

describe("Winchester Integration Tests", () => {
    it("GET /winchesters", async () => {
        const res = await supertest(server).get("/winchesters")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(4)
        expect(res.body[2].name).toBe("John Winchester")
    })

    it("GET /winchesters/:id", async () => {
        const res = await supertest(server).get("/winchesters/2")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("Sam Winchester")
        expect(res.body.role).toBe("hunter")
        expect(res.body.death_count).toBe(112)
    })

    it("GET /winchesters/:id (NOT FOUND)", async () => {
		const res = await supertest(server).get("/winchesters/73")
		expect(res.statusCode).toBe(404)
    })

    it("POST /winchesters", async () => {
        const newWinchester = {
            name: "Gen Winchester",
            role: "hunter",
            years_active: "2011 - Current",
            death_count: 0,
          }

        const res = await supertest(server).post("/winchesters").send(newWinchester)

        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Gen Winchester")
        expect(res.body.role).toBe("hunter")
        expect(res.body.death_count).toBe(0)
        expect(res.body.years_active).toBe("2011 - Current")
    })
})
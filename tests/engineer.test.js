const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Prompt",() => {
        it("Should place GitHub username for employee", () => {
            const value = "DannyAlexanderH";
            const x = new Engineer("Danny", 2, "daniel12@gmail.com", value);

            expect(x.github).toBe(value)
        });
    })
})
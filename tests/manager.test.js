const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("prompt", () => {
        it("Should place office number for employee", () => {
            const value = 12;
            const x = new Manager("Danny", 2, "daniel@gail.com", value);

            expect(x.office).toBe(value);
        });
    })
})
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Prompt", () => {
        it("Should place High School for employee", () => {
            const value = "Legion High School";
            const x = new Intern("Danny", 1, "daniel@gmail.com", value);

            expect(x.school).toBe(value);
        });
    })
})
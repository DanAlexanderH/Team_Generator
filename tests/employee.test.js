const Employee = require("../lib/Employee");


describe ("employee", () => {
    describe("Prompt", () => {
        it("Should place the name for the employee", () => {
            const value = "Danny";
            const x = new Employee(value);

            expect(x.name).toBe(value)
        });

        it("Should place the id # for the employee", () => {
            const value = "1";
            const x = new Employee("Danny", value);

            expect(x.id).toBe(value)
        });

        it("Should place email for the employee", () => {
            const value = "danny12@gmail.com";
            const x = new Employee("Danny", 34, value);

            expect(x.email).toBe(value);
        })
    })
})
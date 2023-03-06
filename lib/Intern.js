
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.title = "Intern";
        this.school = school
    }

    returnSchool(){
        return this.school;
    }
}

module.exports = Intern;
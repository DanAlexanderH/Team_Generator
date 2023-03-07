const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.title = "Egineer";
        this.github = github;
    }



    returnGithub(){
        return this.github;
    }
}

module.exports = Engineer;
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.title = "Manager";
        this.office = office;
    }



    returnOffice(){
        return this.office;
    }
}

module.exports = Manager;
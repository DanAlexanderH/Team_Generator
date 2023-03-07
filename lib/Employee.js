class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    returnName(){
        return this.name;
    }

    returnId(){
        return this.id;
    }

    returnEmail(){
        return this.email;
    }

    returnTitle(){
        return this.title;
    }
}

module.exports = Employee


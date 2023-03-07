const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fullHtml = require("./src/temp")

const writeFileAsync = util.promisify(fs.writeFile);
let groupBlock = [];
let groupString = "";

async function start() {
    try {
        await prompt()
        for (let i=0; i < groupBlock.length; i++) {
            // console.log(groupBlock)
            groupString = groupString + fullHtml.makeCard(groupBlock[i]);
        }

        let completeHTML = fullHtml.generateHTML(groupString)
        writeFileAsync("./generated/output.html", completeHTML);

    } catch (err) {
        return console.log(err);
    }
}


async function prompt() {
    let userResponse = "";
    do{
        try {
             let question = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your employee's name? ",
                    validate: (answer) => {
                        if(answer === "") {
                            return "Please enter a valid name"
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter your employee's # ",
                    validate: (answer) => {
                        if(isNaN(answer)) {
                            return "Please enter a valid ID #. "
                        } else if (answer === "") {
                            return "Please enter a valid ID #. "
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your employee's email adress. ",
                    validate: (answer) => {
                        if(answer === "") {
                            return "Please enter an email adress."
                        } 
                        return true
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is your employee's role? ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
        
            ]);

            let response = "";
            if(question.role === "Engineer") {
                response = await inquirer.prompt([
                    {
                        type: "input",
                        name: "ans",
                        message: "What is the employee's GitHub Username? ",
                        validate: (answer) => {
                            if(answer === "") {
                                return "Please enter a valid GitHub Username. "
                            } 
                            return true
                        }
                    }, ]);

                    const engineer = new Engineer(question.name, question.id, question.email, response.ans);
                    groupBlock.push(engineer);
                    // console.log(groupBlock);
            } else if (question.role === "Manager") {
                response = await inquirer.prompt([
                    {
                        type: "input",
                        name: "ans",
                        message: "What is your employee's office number? ",
                        validate: (answer) => {
                            if(isNaN(answer)) {
                                return "Please enter a office number. "
                            } else if (answer === "") {
                                return "Please enter a office number. "
                            }
                            return true
                        }
                    }, ]);
                    
                    const manager = new Manager(question.name, question.id, question.email, response.ans);
                    groupBlock.push(manager);

                } else if (question.role === "Intern") {
                    response = await inquirer.prompt([
                        {
                            type: "input",
                            name: "ans",
                            message: "What is the name of the school being attended? ",
                            validate: (answer) => {
                                if(answer === "") {
                                    return "Please enter a valid school name. "
                                } 
                                return true
                            }
                        }, ]);
                        
                        const intern = new Intern(question.name, question.id, question.email, response.ans);
                        groupBlock.push(intern);
        }
    } catch (err) {
        return console.log(err);
    }
    userResponse = await inquirer.prompt([
        {
            type: "list",
            name: "finish",
            message: "Do you want to add another employee? ",
            choices: [
                "Yes",
                "No"
            ]
        }, ]);
    } while (userResponse.finish === "Yes");
};


start();

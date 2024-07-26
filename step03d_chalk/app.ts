
import inquirer from "inquirer";
import chalk from "chalk";

const studentData = await inquirer.prompt(
    [
        {
            type: "string",
            name: "name",
            message: chalk.greenBright("What is your name: ")
        },
        {
            type: "string",
            name: "fName",
            message: chalk.blueBright("What is your father name: ")
        },
        {
            type: "number",
            name: "age",
            message: chalk.magentaBright.yellowBright("What is your age: ")
        }
    ]
)

console.log(chalk.italic.bold.bgMagenta.bgHex(`${studentData.name}, ${studentData.fName}, ${studentData.age}`));


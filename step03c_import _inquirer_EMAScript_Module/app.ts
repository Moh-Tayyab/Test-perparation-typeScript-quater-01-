import inquirer from 'inquirer';

let getUser = await inquirer.prompt(
    [
        {
            type: 'string',
            name: 'name',
            message: 'Please enter your name: '
            
        },
        {
            type: 'number',
            name: 'age',
            message: 'Please enter your age: '
        }
    ]
)

console.log(`My name is ${getUser.name}, I'm ${getUser.age} year old.`);

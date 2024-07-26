let user = {
    //property initialize
    name: 'Muhammad',
    age: 21
}

console.log(user.name); //Muhammad
console.log(user['age']); //21

// Type Declaration
let data: {
    //property initialize
    name: string;
    age: number;
    isActive: boolean;
}

data = { 
    //property initialize
    
    name: 'Fahad',
    age: 19,
    isActive: false
}

console.log(data['name'], data.age); //Fahad  19
console.log(data.isActive); //false 


//Anonymous 
let student: {name: string, age: number, isValid: boolean} = {
    name: 'Muhammad',
    age: 21,
    isValid: true
}

console.log(student);

// Aliased Object Type
type User = {
    name: string;
    _id: number;
    isPaid: boolean
}

let userInfo: User = {
    name: 'Tayyab',
    _id: 1234,
    isPaid: true
}

console.log(userInfo);

//Interfaces
interface Manager{
    name: string;
    age?: number;

}

let storeManager: Manager = {
    name: 'Zain'
}



let myName: null | string;

myName = null;

console.log(myName);

myName = "Tayyab";

console.log(myName);

//myName = 111; //error

//myName = undefined //error

let age: string | number;

age = 19; //narrowing
//console.log(age);
console.log(age.toString());

//console.log(age.toLowerCase());//Error

age = "Dont Know"; //narrowing
console.log(age); // output is Dont Know

console.log(age.toString()); // common to both types
//can be called even without narrowing

console.log(age.toLowerCase()); // output is dont know
//Can be called on string because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 20;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

let myAge: number | "died" | "unknown";

myAge = 35; //OK
myAge = "died"; //OK
myAge = "unknown"; //OK
//age = "living";//Error

let z: "ameen";
z = "ameen";
//z= "khan";//Error

let yourName = Math.random() > 0.6 ? "Muhammad" : undefined;

if (yourName) {
  yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase(); //OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

function printId(id: string | number) {
    //console.log(id.toLowerCase())
}
//For example, TypeScript knows that only a string value will have a typeof value "string"
function printId1(id: string | number) {
// In this branch, id is of type 'string'
    if(typeof id === "string") {
        console.log(id.toUpperCase())
    }else { 
        // Here, id is of type 'number'
        console.log(id)
    }
}


type Options = {length: number,
    width: number,
    color: string
}
function config(x: Options | "isValid") {
    return x
}

console.log(config({width: 12, color: "Blue", length: 23}));

console.log(config("isValid"));

//console.log(config("notValid")); //Argument of type '"isValid"' is not assignable to parameter of type 'Options | "isValid"'
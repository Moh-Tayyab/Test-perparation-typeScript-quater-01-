var myName;
myName = null;
console.log(myName);
myName = "Tayyab";
console.log(myName);
//myName = 111; //error
//myName = undefined //error
var age;
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
var newAge = Math.random() > 0.6 ? "Khan" : 20;
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
var myAge;
myAge = 35; //OK
myAge = "died"; //OK
myAge = "unknown"; //OK
//age = "living";//Error
var z;
z = "ameen";
//z= "khan";//Error
var yourName = Math.random() > 0.6 ? "Muhammad" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
var data;
function printId(id) {
    //console.log(id.toLowerCase())
}
//For example, TypeScript knows that only a string value will have a typeof value "string"
function printId1(id) {
    // In this branch, id is of type 'string'
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function config(x) {
    return x;
}
console.log(config({ width: 12, color: "Blue", length: 23 }));
console.log(config(true));

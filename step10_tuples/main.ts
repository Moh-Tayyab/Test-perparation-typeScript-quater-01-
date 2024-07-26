//our tuple
let a: [number, string, boolean]; 

//initilized correct
a = [3, "zain", true];

//our tuple
let b: [string, boolean, number ];

//initilized incorrect which throws an error
//b = [4, "usama", false];

//our tuple
let c: [number, boolean, string];

//initilized correct
c = [4, true, "fahad"];

// We have no type safety in our tuple for indexes 3+
c.push("something new and wrong");

console.log(c);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string,] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');



  



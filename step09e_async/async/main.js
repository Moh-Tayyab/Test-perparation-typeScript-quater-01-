/*
//setTimeOut...
function washing(callBack: any) {
    console.log("Start Washing...");
    setTimeout(() => {
        console.log("Washing Done!");
        callBack();
    }, 5000)
 
}

function soaking(callBack: any) {
    console.log("Start Soaking...");
    setTimeout(() => {
        console.log("Soaking Done!");
        callBack();
    }, 4000);
     
}

function drying() {
    console.log("Start Drying...");
    setTimeout(() => {
        console.log("Drying Done!");
        
    }, 3000)
    
}

console.log("Making Laundry");


washing( () => {
    soaking(() => {
        drying();
    });
});

console.log("I'm making briyani.");*/
function washing() {
    console.log("Start washing...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing Done!");
        }, 5000);
    });
}
function soaking() {
    console.log("Start Soaking");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking Done!");
        }, 3000);
    });
}
function drying() {
    console.log("Start Drying");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done!");
        }, 2000);
    });
}
/*
washing()
  .then((value) => {
    console.log(value);
    return soaking();
  })
  .then((value) => {
    console.log(value);
    return drying();
  }).then((value) => {
    console.log(value);
    
  })*/
//async & await
async function runWashing() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("I will run anyway");
    }
}
console.log("Making laundry");
runWashing();
console.log("I'm making briyani.");
export {};

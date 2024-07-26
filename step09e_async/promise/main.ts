/*
const returnMoney = new Promise((resolve, reject)=> {
    setTimeout(() => {
 resolve(`Money Return ${1000}`)
    }, 3000)
});
//returnMoney.catch((error) => {
//console.log(error)
//})
returnMoney.then((value) => {
    console.log(value);
    console.log("Thank you for returning money!  ");
    
}).catch(()=> {
    console.log("Sorry, we can't return money");
})
*/

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
  
  
  washing() //washing() func
    .then((value) => {
      console.log(value);
      return soaking();
    })//for soaking() func
    .then((value) => {
      console.log(value);
      return drying();
    })//for drying() func
    .then((value) => {
      console.log(value);
      
    })
    .catch((error)=> {
      console.log(error);
    })
    
 
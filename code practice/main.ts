import chalkAnimation from "chalk-animation";
import { resolve } from "path";


//call back function

// function main(child: () => void ) {
//     console.log("I'm a main function");
//     child();
// }

// function childFunc() {
//     console.log("I'm child function");
// }

// main(childFunc)

// console.log("Eating food");

// function coding(main: any){
//     console.log("Start coding...");
//     setTimeout(() => {
//         console.log("Coding Done!!");
//         main();
//     }, 5000)

// }

// function song(callBack: any) {
//     console.log("Start Song...");
//     setTimeout(()=> {
//         console.log("Song resume!!!");
//         callBack();
//     }, 2000)

// }

// function readBook(mid: any) {
//     console.log("Start Reading...");
//     setTimeout(() => {
//         console.log("I read 10 page done!!");
//         mid();
//     }, 4000)

// }

// function workOut(end: any) {
//     console.log("Start WorkOut...");
//     setTimeout(() => {
//         console.log("WorkOut Finish!!!");
//         end();
//     }, 3000)

// }

// calling callBack function
// coding(() => {
//     song(() => {
//         readBook(() => {
//             workOut(() => {
//             })
//         })
//     })
// })

// console.log("Drink Water")

//setTimeout

// setTimeout(() => {
//     console.log("2 second delay");

// }, 2000)

//Promise

// let practice = new Promise((resolve, reject) => {
//resolve("thanks")
//     reject("bad")
// })

// practice.then((value) => {
//     console.log(value);

// }).catch((error) => {
//     console.log(error);

// }).finally(() => {
//     console.log('I run anyWay...');

// })

function coding() {
    return new Promise((resolve) => {
      console.log("Start Coding...");
      const animation = chalkAnimation.rainbow("Coding in Progress...");
      setTimeout(() => {
        animation.stop(); // Stop the animation
        resolve("Coding Done");
      }, 5000);
    });
  }
  
  function song() {
    return new Promise((resolve) => {
      console.log("Start Song...");
      const animation = chalkAnimation.neon("Singing in Progress...");
      setTimeout(() => {
        animation.stop(); // Stop the animation
        resolve("Song Done");
      }, 4000);
    });
  }
  
  function readBook() {
    return new Promise((resolve) => {
      console.log("Start Reading...");
      const animation = chalkAnimation.karaoke("Reading in Progress...");
      setTimeout(() => {
        animation.stop(); // Stop the animation
        resolve("Reading Done!!");
      }, 3000);
    });
  }
  
  function workOut() {
    return new Promise((resolve) => {
      console.log("Start Working Out...");
      const animation = chalkAnimation.rainbow("Working Out in Progress...");
      setTimeout(() => {
        animation.stop(); // Stop the animation
        resolve("Working Out completed...");
      }, 2000);
    });
  }
  
  function sleep() {
    return new Promise((resolve) => {
      console.log("Start Sleeping...");
      const animation = chalkAnimation.rainbow("Sleeping in Progress...");
      setTimeout(() => {
        animation.stop(); // Stop the animation
        resolve("Sleeping Done");
      }, 1000);
    });
  }

  function morning() {
    return new Promise ((resolve, reject) => {
        console.log("Good Morning");
        const animation = chalkAnimation.neon("Drinking water...")
        setTimeout(() => {
            animation.stop(); // Stop the animation
            resolve("Drinking water done")
        }, 2000)
  })
  }
//call promise
// coding().then((value) => {
//     console.log(value)
//     return song()
// }).then((value) => {
//     console.log(value)
//     return readBook()
//     }).then((value) => {
//         console.log(value)
//         return workOut()
//     }).then((value) => {
//         console.log(value)
//         return sleep()
//     }).then((value) => {
//         console.log(value)
//     })

//not working perfect
// function mainMenu() {
//     console.log("Welcome to the main menu")

//     console.log("1. Coding")
//     coding().then((value) => {
//         console.log(value)
//     })
//     console.log("2. Song")
//     song().then((value) => {
//         console.log(value)
//     })
//     console.log("3. Reading")
//     readBook().then((value) => {
//         console.log(value)
//     })
//     console.log("4. Working Out")
//     workOut().then((value) => {
//         console.log(value)
//     })
//     console.log("5. Sleeping")
//     sleep().then((value) => {
//         console.log(value)
//     })
// }

// mainMenu();

async function main() {
  console.log("Welcome to the main menu");
  try {
    const ans1 = await coding();
    console.log(ans1);
    const ans2 = await song();
    console.log(ans2);
    const ans3 = await readBook();
    console.log(ans3);
    console.log("Pray Namaz");
    const ans4 = await workOut();
    console.log(ans4);
    const ans5 = await sleep();
    console.log(ans5);
    console.log("View beautiful dream");
    const ans6 = await morning();
    console.log(ans6);
  } catch (error) {
    console.log("error");
    console.log(error);
  } finally {
    console.log("Good Morning");
    
  }
}

console.log("Making Cofeee.....");

main();

console.log("Eating food..");

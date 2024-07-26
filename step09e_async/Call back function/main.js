//Call back function
function parentFunc(func) {
    console.log("I'm Parent function.");
    func();
}
/*
function callMeAfter2Seconds() {
    setTimeout(() => { console.log("2 seconds have passed"); }, 2000);
    }
    //Call back function
parentFunc(callMeAfter2Seconds);*/
function childFunc() {
    console.log("I'm child function.");
}
//Call back function
parentFunc(childFunc);
export {};

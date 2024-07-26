
function optinalPara(name: string, msg?: string) {
    if(msg !== undefined) {
    console.log(`${name}, ${msg} `)
    }else{
        console.log(`Hello, ${name} `)
    }
}

optinalPara("Muhammad"); // output Hello, Muhammd

optinalPara("Muhammad", "Are you happy to start learning programming");//output Muhammad, Are you happy to start learning programming 

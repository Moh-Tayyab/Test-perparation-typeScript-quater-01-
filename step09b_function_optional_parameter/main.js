function optinalPara(name, msg) {
    if (msg !== undefined) {
        console.log("".concat(name, ", ").concat(msg, " "));
    }
    else {
        console.log("Hello, ".concat(name, " "));
    }
}
optinalPara("Muhammad");
optinalPara("Muhammad", "Are you happy to start learning programming");

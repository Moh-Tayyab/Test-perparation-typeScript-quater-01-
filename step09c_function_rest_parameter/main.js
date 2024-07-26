function allAdd() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}
console.log(allAdd(12, 10, 11, 5, 5));

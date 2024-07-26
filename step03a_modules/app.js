"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var second_js_1 = require("./second.js");
var first_js_1 = require("./first.js");
console.log("Add:", (0, first_js_1.add)(2, 4));
console.log("Subtract:", (0, first_js_1.subtract)(9, 3));
//console.log("\n")
console.log("***Table***");
var result = (0, second_js_1.table)(5);
console.log(result);

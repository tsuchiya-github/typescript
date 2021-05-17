"use strict";
exports.__esModule = true;
var fs = require("fs");
// function total(data: Data[]) {
//     let t = 0;
//     data.forEach((item) => {
//         t += item.id;
//     })
//     return t;
// }
var content = fs.readFileSync('data.json');
var data = JSON.parse(content.toString());
// console.log(total(data));
console.log(data);

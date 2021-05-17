import * as fs from 'fs';
// jsだと const fs = require('fs');

interface Data {
    userId: number,
    id: number,
    title: string,
    body: string
}

// function total(data: Data[]) {
//     let t = 0;
//     data.forEach((item) => {
//         t += item.id;
//     })
//     return t;
// }

const content = fs.readFileSync('data.json');
const data: Data[] = JSON.parse(content.toString());
// console.log(total(data));
console.log(data);
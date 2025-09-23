/* Global 
__dirname : current directory name

__filename : path to current file
*/

console.log(__dirname);

console.log(__filename);
let count = 0;
const interval = setInterval(()=>{
    console.log("Hello");
    count++;
    if(count == 5) clearInterval(interval);},1000);


const data = require("./datas");

console.log(data);
const number = require("./Numbers");
console.log(number.a + number.b);

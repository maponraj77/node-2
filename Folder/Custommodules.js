
// const os = require('os');
// const user = os.userInfo();
// console.log(user);


// const currentos = {
//     name:os.type(),
//     total_memory : os.totalmem(),
//     free_memory : os.freemem(),
//     uptime : os.uptime(),
//     relese : os.release()
// }


// console.log(currentos);


const path = require('path')

console.log(path.sep);

console.log(path.join("folder","subfolder","..","file.txt"));

const apath = path.resolve("folder","subfolder","..","file.txt");
console.log(apath);

console.log(path.basename(apath));



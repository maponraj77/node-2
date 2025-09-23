const fs = require('fs');
const file1 = fs.readFileSync('./Folder/file1.txt','utf-8');

const file2 = fs.readFileSync('./Folder/file2.txt','utf-8');

fs.writeFileSync('./Folder/result.txt',`File 1 ${file1}\n File 2 ${file2}`,{flag:'a'})

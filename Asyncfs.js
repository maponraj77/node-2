const {readFile,writeFile} = require('fs');

readFile('./Folder/file1.txt','utf8',(err,data)=>{
    if(err){
        console.log(err.message);
        return;
    }
    const file1 = data;
    
    readFile('./Folder/file2.txt','utf8',(err,data)=>{
        if(err){
            console.log(err.message);
            return;
        }
        const file2 = data;
        console.log(file1,"->",file2);
        
        writeFile('./Folder/result.txt',`The result is ${file1},${file2}`,(err)=>{
            if(err) console.log(err.message);
        })
    })

    
})
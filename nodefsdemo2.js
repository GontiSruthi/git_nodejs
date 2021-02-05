const fs=require('fs');
//const myFiles=fs.readdirSync('../nodejsdemo')
//console.log(myFiles)


fs.readdir('../nodejsdemo',(error,files)=>{
    if(error){
        throw error;
    }
    files.forEach(file=>{
        const filePath=path.basename(file);
        if(filePath==='shape.js')
        fs.readFile(`../nodejsdemo/${filePath}`,'UTF-8',(error,data)=>{
            if(error){throw error}
            comsole.log(data)
        })
    })
   // console.log(files);
})

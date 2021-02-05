var obj=require('fs');
let values=[];
obj.readFile('date.txt','UTF-8',(err,data)=>{
       if(err)
       {
           throw err;
       }
          var a =  data.split('\r\n')
        
          console.log((a.filter(num => num%2 !== 0)))
           
    })
    
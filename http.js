const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{

    if(req.url=='/'){
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/services'){
        fs.readFile('services.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/About'){
        fs.readFile('About.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/contact'){
        fs.readFile('contact.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile('404.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
        
    }

}).listen(5746,(err)=>{console.log('start')});

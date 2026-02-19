const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Ye mera home page hai");
    }
    else if(req.url==="/about"){
        res.end("Ye mera about page hai");
    }
    else if(req.url==="/contact"){
        res.end("Ye mera contact page hai");
    }
    res.end("404(galat route hai)");
    

})
server.listen(3000,()=>{
    console.log("ye mera chl rha h");
    
})

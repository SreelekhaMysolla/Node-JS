const http = require("http");

const port = 8081; // local port num

http.createServer((req,res)=>{// call back func
    res.writeHead(200, {"content-Type": "text/html"});
    res.write("<h2> hey server started :-)123</h2>");
    res.end();
})
.listen(port, ()=>{// call back func
    console.log(`Node Js Server Started Running on port $(port) `);
});


//http://localhost:8081
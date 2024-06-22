const http = require("http");

const port = 8081; // local port num

//HTTP Methods
/*
>>GET: Inorder to get data from server
>>POST: Sending data to server
>>DELETE:Deleting the data from database
>>PATCH:Updating Certain fields
>>PUT: Full Update
*/

const toDoList =["learn", "apply things","succed"]; 


http.createServer((req,res)=>{// call back func
     //call back func
        const {method, url } = req;
       // console.log(method, url);
       if(url === "/todos"){
       }else if(url === "/"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDOList.toString());
        }
       }
        res.end();
       
    //res.writeHead(200, {"content-Type": "text/html"});
    //res.write("<h2> hey server started :-)123</h2>");
    //res.end();
})
.listen(port, ()=>{// call back func
    console.log(`Node Js Server Started Running on port $(port) `);
});

//http://localhost:8081
//http://localhost:8081/


//http://localhost:8081/signin
//http://localhost:8081/signup
//http://localhost:8081/home
//http://localhost:8081/contactUs
//http://localhost:8081/aboutUs
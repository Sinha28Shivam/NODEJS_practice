const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

// this is created using Express
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from the homepage");
});
app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}` + ' You are ' + req.query.age);
})



// This is normally NODE JS handler
function myHandler(req, res){
    if (req.url === '/favicon.ico') return res.end()  // this is for ignoring favicon

    const log = `${ Date.now() }: ${ req.method } ${ req.url } New Req Received\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
       
        switch(myUrl.pathname){
            case "/":
                if(req.method === "GET"){
                    res.end("HomePage");
                }
            break

            case "/Contacts":
                res.end("Contact Us Page");
            break

            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
            break

            case "/signup":
                if(req.method === "GET"){
                    res.end("this is Signup Page");
                }
                else if(req.method === "POST") {
                    // It will handle the DB query
                    res.end("Success")
                }
            break
            
            default:
                res.end ("404 not found");
        }
    });


}

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server Started!"));


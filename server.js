


const  express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");    

const SERVER_PORT = 4000;
const SERVER_HOST = "localhost"

server.use(express.urlencoded()); // to support URL-encoded bodies

function start(){
    console.log("Server is started");
}

server.get("/",function(req,resp){
    resp.send("Hello from Tarun Singh");
})

server.get("/register",function(req,resp){
    resp.sendFile(path.join(__dirname,"views/index.html"));
})

server.post("/register", function(req, resp) {
    const data = req.body;
    let content= "";
    Object.keys(data).forEach((key, i) => {
        content += data[key];
        if (i < Object.keys(data).length - 1) {
            content += ","
        }
    });
    content+= "\n";
    fs.appendFile(path.join(__dirname,"database.txt"), content, err => {
        if (err) console.error(err);
      });
    resp.send("data received");
})



server.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at https://${SERVER_HOST}:${SERVER_PORT}/`);
})


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let files = fs.readdirSync(path.join(__dirname, "./assets"));
    let resArr = files.map((value) => {
        return {
            link: "https://www.baidu.com/",
            image: "http://localhost:3000/" + value,
        };
    });
    res.send(resArr);
});

app.use(express.static(path.join(__dirname, "assets")));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const os = require("os");
const fs = require("fs");
const cors = require("cors");

app.use(cors({
    orgin : "http://localhost:3000"
}))

app.get("/filecreate", (req, res) => {
  var date = new Date().valueOf();
  console.log(date);

  fs.mkdir(`./${date}`, function () {
    console.log(`Current Timestamp ${date} Folder Created`);
  });
  res.json({ message: `Current Timestamp ${date} Folder Created` });
});

app.listen(3003);

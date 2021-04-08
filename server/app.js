const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const fm = [
  {
    id: 1,
    title: "SDP"
  },
  {
    id: 2,
    title: "Failure"
  },
  {
    id: 3,
    title: "Map"
  }
];

app.use(cors());
app.options("*", cors());
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/innerpage", (req, res) => res.json(fm));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
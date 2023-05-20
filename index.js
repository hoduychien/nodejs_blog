const express = require("express");

const app = express();
const post = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(post, () => console.log(`Server is running on port ${post}`));

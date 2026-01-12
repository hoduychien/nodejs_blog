const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/news", (req, res) => {
  res.render("news", { title: "News Page" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const PORT = 3000;

const route = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("dev"));

route(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

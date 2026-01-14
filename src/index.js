// Import required modules
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set up Handlebars as the view engine with '.hbs' extension
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
// Set the directory for view templates
app.set("views", path.join(__dirname, "resources", "views"));

// Use morgan middleware for logging HTTP requests
app.use(morgan("dev"));

// Define route for the home page
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

// Define route for the news page
app.get("/news", (req, res) => {
  res.render("news", { title: "News Page" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

class SiteController {
  index(req, res) {
    res.render("home", { title: "Home Page" });
  }
}
module.exports = new SiteController();

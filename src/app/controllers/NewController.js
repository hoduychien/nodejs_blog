class NewsController {
  index(req, res) {
    res.render("news", { title: "News Page" });
  }

  show(req, res) {
    res.send("News Detail Page");
  }

  async getAll(req, res) {
    const newsList = [
      { id: 1, title: "First News", content: "Content of first news" },
      { id: 2, title: "Second News", content: "Content of second news" },
    ];
    res.json(newsList);
  }
}
module.exports = new NewsController();

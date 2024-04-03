import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// database-list for our articles
let articles_list = [
  { title: 'Almeida vs Barca 4-1', text: 'Almeida won barcelona' },
  { title: 'Hobbies for you', text: 'this is the best hobbies for you' },
  { title: 'London school won the league ', text: 'The championship came to an end' }
];

app.get("/", (req, res) => {
  res.render("index.ejs", {articles: articles_list});
});

app.get("/article-single", (req, res) => {
  res.render("article-single.ejs");
});


app.post("/submit", (req, res) => {
  const article = {
    title: req.body["title"],
    text: req.body["article"]
};
articles_list.push(article);
  res.render("index.ejs",{articles: articles_list});
});

app.get('/article-single/:id', (req, res) => {
  const id = req.params.id;
  const article_single = articles_list[id];
  res.render('article-single.ejs', { title: article_single.title, body: article_single.text, ar_id: id });
});

// function to delete from database with title
function deleteArticleByTitle(title) {
  // Filter out the article with the given title
  articles_list = articles_list.filter(article => article.title !== title);
}


app.post("/update", (req, res) => {
    var up_id = req.body["id"];
    console.log(up_id);
    var cu_title = articles_list[up_id].title;
    var cu_text = articles_list[up_id].text;
    res.render("update.ejs", {id: up_id, title: cu_title, text: cu_text });
});

app.post("/submit-update", (req, res) => {
  var id_up = req.body["id"];
  var title_up =  req.body["title"];
  var text_up = req.body["article"];
  articles_list[id_up].title = title_up;
  articles_list[id_up].text = text_up;
  res.render("index.ejs", {articles: articles_list});
});

app.post("/delete", (req, res) => {
  var up_id = req.body["id"];
  var cu_title = articles_list[up_id].title;
  deleteArticleByTitle(cu_title);
  res.render("index.ejs",{articles: articles_list});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

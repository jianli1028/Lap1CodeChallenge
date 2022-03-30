const express = require("express");
const res = require("express/lib/response");
const app = express();
const cors = require("cors");
const article = require("./data.js"); //call the data.js
app.use(cors());
app.use(express.json());

//random article function
const getRandomArticle = () => {
  let len = article.length + 1;
  let x = Math.floor(Math.random() * len);
  return article[x];

  // let getRandomIndex = Math.floor(Math.random() * article.length); //random index
  // let randomArticle = article[getRandomIndex]; //put the index
  // return randomArticle; //return the article with full information
};

//default path
app.get("/", (req, res) =>
  res.send(`Article API. <br>To view all retrieved articles visit /articles!`)
);

//pathway for all the articles
app.get("/article", (req, res) => {
  res.send(article);
});

//pathway for random article
app.get("/article/random", (req, res) => {
  res.send(getRandomArticle());
});

//pathway for specific article by ID
app.get("/article/:id", (req, res) => {
  const articleId = req.params.id - 1;
  let len = article.length - 1;
  if (articleId >= 0 && articleId <= len) {
    res.send(article[articleId]);
  } else {
    res.status(404).json({
      Error: `Choose a number between 1 and ${article.length}`,
    });
  }
});

module.exports = app;

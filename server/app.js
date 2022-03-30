const express = require('../express');
const res = require("express/lib/response");
const app = express();
const cors = require('../cors');
const article = require(".article"); //call the data.js
app.use(cors());

//random article function
const getRandomArticle = () => {
    let getRandomIndex = Math.floor(Math.random() * article.length); //random index
    let randomArticle = article[getRandomIndex]; //put the index
    return randomArticle; //return the article with full information
}

//default path
app.get('/', (req, res) => res.send('Article API, all our retrieved articles are here!'));

//pathway for all the articles
app.get("/article", (req, res) => {
    res.send(article);
});

//pathway for specific article by ID
app.get('/article/:id', (req, res) => {
    try {
    const articleId = req.params.id - 1;
    res.send(article[articleId]);
    } catch (error) {
        console.error(`Error ${error}, you looked went out of range, try from 1 to ${article.lenght}.`)
    };
});

//pathway for random article
app.get("/article/random", (req, res) => {
    res.send(getRandomArticle());
});

module.exports = app;
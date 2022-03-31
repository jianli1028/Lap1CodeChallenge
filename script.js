document.getElementById("searchBtn").addEventListener("click", searchResults);

document
  .getElementById("feelingLuckyBtn")
  .addEventListener("click", feelingLucky);

async function searchResults() {
  try {
    const res = await fetch("http://localhost:3000/article")
      .then((res) => res.json())
      .then((data) => {
        let output = `<h1 class="display-1 m-3" style="text-align: center;">Search results</h1>`;
        data.forEach(function (article) {
          let x = article.Article;
          let y = x.slice(0, 300);

          output += `
                            <div class="card card-body mb-3" style="width: 50rem; margin: auto;">          
                            <h3>${article.Title}</h3>
                            <p><a href="${article.URL}" class="stretched-link">${article.URL}</a></p>
                            <p>Author: ${article.Author}</p>
                            <p>Publish date: ${article.ArtDate}</p>
                            <p>${y}</p>
                            </div>
                      `;
        });
        document.getElementById("output").innerHTML = output + `<br>`;
      });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

function feelingLucky() {
  fetch("http://localhost:3000/article/random")
    .then((res) => res.json())
    .then((data) => {
      const { ID, URL } = data;

      window.location.href = URL;
    })
    .catch((err) => console.log(err));
}

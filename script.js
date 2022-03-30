document.getElementById("searchBtn").addEventListener("click", searchResults);

document
  .getElementById("feelingLuckyBtn")
  .addEventListener("click", feelingLucky);

async function searchResults() {
  try {
    const res = await fetch("http://localhost:3000/article")
      .then((res) => res.json())
      .then((data) => {
        let output;
        data.forEach(function (article) {
          output += `
                            <h3>${article.Title}</h3>
                            <p>${article.URL}</p>
                            <p>${article.Author}</p>
                            <p>${article.ArtDate}</p>
                            <p>${article.Article}</p>
                      `;
        });
        document.getElementById("output").innerHTML = output;
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

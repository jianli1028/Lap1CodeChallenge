document.getElementById("searchBtn").addEventListener("click", searchResults);

document
  .getElementById("feelingLuckyBtn")
  .addEventListener("click", feelingLucky);

async function searchResults() {
  try {
    const res = await fetch("http://localhost:3000/article")
      .then((res) => res.json())
      .then((data) => {
        let output = `<h1 class="my-3">Posts</h1>`;
        data.forEach(function (article) {
          output += `
                        <div class="card card-body mb-3">
                            <h3>${article.Title}</h3>
                            <p>${article.URL}</p>
                            <p>${article.Author}</p>
                            <p>${article.ArtDate}</p>
                            <p>${article.Article}</p>
                        </div>
                      `;
        });
        document.getElementById("output").innerHTML = output;
      });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

// function feelingLucky() {
//   fetch("http://localhost:3000/random")
//     .then((res) => res.text())
//     .then((data) => {

//         data.URL
//       document.getElementById("text").textContent = data;
//     })
//     .catch((err) => console.log(err));
// }

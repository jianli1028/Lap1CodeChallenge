const app = require("./app"); //<--- call the app.js

const port = 3000;

app.listen(port, () => {
    console.log(`Server API port at http://localhost:${port}`)
});
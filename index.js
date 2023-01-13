const express = require('express')
const app = express();
var port = process.env.PORT || 3000
app.get("/", (req, res) => {
  res.send("Hey, the API is running 🥳");
});
app.listen(3001, () => {
  console.log("listening on port 3001");
});
// app.use(cors());

const express = require("express");
const app = express();

app.get("/", (req, res) => 
  res.send(`Docker container web app running on external port ${process.env.PORT || 9999}`));

const server = app.listen(9999, () => {
  console.log(`Server is running on internal port 9999`);
});
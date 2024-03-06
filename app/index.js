const express = require("express");
const app = express();

app.get("/", (req, res) => 
  res.send(`Docker container web app running on external port ${process.env.PORT || 80}`));

const server = app.listen(80, () => {
  console.log(`Server is running on internal port 9999`);
});
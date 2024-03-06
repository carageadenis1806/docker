const express = require("express");
const app = express();

app.get("/", (req, res) => 
  res.send(`Docker container web app running on external port ${process.env.PORT || 8081}`));

const server = app.listen(8081, () => {
  console.log(`Server is running on internal port 8081`);
});
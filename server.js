const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend App Service is running");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the private backend!",
    source: "Azure App Service"
  });
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend running on port ${port}`);
});

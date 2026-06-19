const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Aplikacija radi uspešno!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server je pokrenut na portu ${PORT}`);
  });
}

module.exports = app;

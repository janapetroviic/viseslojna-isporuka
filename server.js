const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function isValidText(text) {
  if (typeof text !== "string") return false;
  return text.trim().length > 2;
}

app.get("/", (req, res) => {
  res.send("Aplikacija radi uspešno!");
});

app.get("/api/provera", (req, res) => {
  const unos = req.query.unos;

  if (isValidText(unos)) {
    return res.status(200).json({ status: "uspeh", poruka: "Unos je validan" });
  } else {
    return res.status(400).json({
      status: "greska",
      poruka: "Unos mora imati više od 2 karaktera",
    });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server je pokrenut na portu ${PORT}`);
  });
}

module.exports = { app, isValidText };

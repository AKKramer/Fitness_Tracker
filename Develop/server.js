const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));


mongoose.connect(process.env.Mango_Atlas || "mongodb://localhost/fitnessTracker", { useNewUrlParser: true });

app.use(require("./routes/html"));
app.use(require("./routes/api"));

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

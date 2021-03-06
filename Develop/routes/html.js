const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/stats.html"));
})

module.exports = router;
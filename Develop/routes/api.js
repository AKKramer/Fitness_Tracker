const router = require("express").Router();
const db = require("../models");

const databaseUrl = "notetaker";
const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);


router.route("/api/workouts")
  .get((req, res) => {
    db.Workout.find({})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(400).end();
      });
  })
  .post((req, res) => {
    db.Workout.create(req.body)
      .then(results => {
        res.status(201).json(results);
      })
      .catch(err => {
        res.status(400).end();
      });
  });
  
router.route("/api/workouts/:id")
  .put((req, res) => {
    const { id } = req.params;
    db.Exercise.create(req.body)
    .then(results => {
      res.json(results)
    })
    
  });



module.exports = router;

const { Schema, Types, model } = require("mongoose")

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Resistance", "Cardio"]
    },
    weight: {
        type: Number,
        min: 0
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    }
});

const workoutSchema = new Schema ({
    exercises: [exerciseSchema]
})

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
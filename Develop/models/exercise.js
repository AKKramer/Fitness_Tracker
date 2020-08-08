const { Schema, model } = require("mongoose")

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["resistance", "cardio"]
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

const Exercise = model("Exercise", exerciseSchema)

module.exports = Exercise
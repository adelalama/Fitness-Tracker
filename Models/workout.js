const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },

    exercises: [
        {

            type: {
                type: String,
                trim: true,
                required: "A type of workout is required"
            },

            name: {
                type: String,
                trim: true,
                required: "Name of workout is required"
            },

            duration: {
                type: Number,
                required: "Duration is required"
            },

            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },


            sets: {
                type: Number,
            },

            distance: {
                type: Number,
            }
        }

    ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
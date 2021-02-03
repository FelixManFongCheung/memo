const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    biggerText: {
        type: String,
        minlength: 3
    },
    smallerText: {
        type: String,
        minlength: 3
    }
})

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note; 
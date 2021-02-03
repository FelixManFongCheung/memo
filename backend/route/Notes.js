const router = require("express").Router();
const Note = require("../model/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const biggerText = req.body.biggerText;
  const smallerText = req.body.smallerText;

  const newNote = new Note({ biggerText, smallerText });

  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Note.findById(req, params.id).then((note) => {
    note.biggerText = req.body.biggerText;
    note.smallerText = req.body.smallerText;
  });

  note
    .save()
    .then(() => res.json("Note updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

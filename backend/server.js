const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Notes = require("./route/Notes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use("/notes", Notes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://scuid9er:${password}@cluster0.vultn4n.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

//CREATE & SAVE NOTE TO DB
// const note = new Note({
//   content: "But CSS can be tricky",
//   important: false,
// });

// note.save().then((result) => {
//   console.log(result);
//   console.log("note saved!");
//   mongoose.connection.close();
// });

//FETCH NOTES
Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});

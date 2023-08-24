const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String,
  roll:{
    type : Number,
    unique : true
  },
  math:   String,
  english: String,
  science: String,
  ss: String,
  lang: String,
  status : String
});
module.exports = mongoose.model("Student", studentSchema)
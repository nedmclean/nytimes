var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
    // match: [/^(?!.*(trump)).*$/i, "F**k Trump"]

  },

  link: {
    type: String,
    required: true,
    unique:true
    // match: [/^(?!.*(trump)).*$/i, "F**k Trump"]
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
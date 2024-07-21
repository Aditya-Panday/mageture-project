const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  imgurl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const PODCAST =
  mongoose.models.PODCAST || mongoose.model("PODCAST", podcastSchema);
export default PODCAST;

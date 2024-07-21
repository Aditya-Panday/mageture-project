const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  videoUrl: {
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
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const EVENTS = mongoose.models.EVENTS || mongoose.model("EVENTS", eventSchema);
export default EVENTS;

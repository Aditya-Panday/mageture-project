const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const LEADS = mongoose.models.LEADS || mongoose.model("LEADS", leadsSchema);
export default LEADS;

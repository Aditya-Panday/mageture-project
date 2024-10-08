const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    default: "user",
  },
});

const USERAUTH = mongoose.models.USER || mongoose.model("USER", userSchema);
export default USERAUTH;

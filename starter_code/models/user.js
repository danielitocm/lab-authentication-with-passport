const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const PLM    = require("passport-local-mongoose")






const userSchema = new Schema({
  username: String,
  email: String,
  password: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});





userSchema.plugin(PLM,{usernameField: "username"})

const User = mongoose.model("User", userSchema);





module.exports = User;
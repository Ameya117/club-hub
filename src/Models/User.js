const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    //   userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    regno: { type: String, required: false,unique:true },
    desc:{type:String, required:false},
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
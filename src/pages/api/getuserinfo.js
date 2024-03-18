import User from "../../../Models/User";
import connectDb from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "GET") {
      try {
          const userId = req.body.userId;
          let user = await User.findOne({ _id: userId });
          console.log(user)
          res.status(200).json({success:true, user:user})
      
    } catch (e) {
      res.status(400).json({ success: false, error: "User Not Found" });
    }
  } else {
    res.status(400).json({ error: "Wrong method" });
  }
};

export default connectDb(handler);

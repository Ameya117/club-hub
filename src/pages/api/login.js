import User from "../../../Models/User";
import connectDb from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let user = await User.findOne({ email: req.body.email });
      
      var pass_check = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
      if (pass_check === req.body.password) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          process.env.SECRET_KEY,
           { expiresIn: '1h' }
        );
        res.status(200).json({ success: true,token: token, userId : user._id });
      } else {
        res.status(400).json({ success: false, error: "Invalid credentials" });
      }
    } catch (e) {
      res.status(400).json({ success: false, error: "User Not Found" });
    }
  } else {
    res.status(400).json({ error: "Wrong method" });
  }
};

export default connectDb(handler);

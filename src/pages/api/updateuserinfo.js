import User from "@/Models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, regno, desc } = req.body;
      const filter = { email: email };
      let doc = await User.findOneAndUpdate(filter, {
        name: name,
        regno: regno,
        desc: desc,
      });
      await doc.save();
      res.status(200).json({ success: "success" });
    } catch (e) {
      res.status(400).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Wrong method" });
  }
};

export default connectDb(handler);

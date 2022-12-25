const { req, res } = require("express")



const Me = async (req, res) => {
    res.send(req.user);
  };
module.exports= Me
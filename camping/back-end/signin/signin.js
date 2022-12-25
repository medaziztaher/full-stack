const { req, res } = require("express")
const jwt = require("jsonwebtoken")
const personne = require ("../models/personne")
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const privateKey = "privateKey";


const signin = async (req,res) => {
    let { email, password } = req.body;
  // Find The user by his Email

  let user = await personne.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "Email doesn't exist !" });
  }

  // Check the password is correct

  let validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "invalid password !" });
  }
  console.log(user);
  // delete the password from the res
  delete user._doc["password"];
  // Create A Token
  var token = jwt.sign({ _id: user._id, email: user.email }, privateKey, {
    expiresIn: "24h",
  });
  res.cookie("jwt_token", token, { maxAge: 10800 });
  return res.status(200).json({ token, user });
};

module.exports= signin
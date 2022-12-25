const { req, res } = require("express")
const jwt = require("jsonwebtoken")
const personne = require ("../models/personne")
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

const signup = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()){ 
         return res.status(400).json({ errors: errors.mapped() })
    }    
    const {cin,mail,password,nom,gender,prenom,role} = req.body
    
    const user=await personne.findOne({mail})
    console.log(user)
    if (user){
        return res.status(401).json({ errors: [{ msg: 'User Exist !' }] })
    }  

    const newUser = new personne({
        cin: cin,
        mail : mail,
        nom : nom,
        gender : gender,
        prenom : prenom,
        role: role

    })
    console.log(newUser)

    const hash = await bcrypt.hash(password, 12)
    newUser.password = hash

    let result= await personne.create(newUser)
    res.send(result)


} catch (error) {
    console.log(error)
    res.status(500).json({ errors: [{ msg: error.messnom }] })
}
}
module.exports=signup
const express=require("express")
var route=express.Router()
const personne=require("../controllers/personne")
const MiddlewareAuth = require("./../middlewares/auth")
route.get("/aziz",personne.getManyFonction)
route.get("/aziz",personne.getByIdFonction)
route.post("/aziz",personne.postFonction)
route.put("/aziz/:cin/:nom",personne.putManyFonction)
route.put("/aziz/:cin/:nom",personne.putByIdFonction)
route.delete("/aziz/:nom",personne.deleteManyFonction)
route.delete("/aziz/:nom",personne.deleteByIdFonction)
route.post("/signin",personne.signin)
route.post("/signup",personne.signup)
route.post("/auth", MiddlewareAuth, personne.Me);

module.exports=route
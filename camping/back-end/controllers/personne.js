const { request, response } = require("express")
const userModel = require("../models/personne")
const signin=require("../signin/signin")
const signup=require("../signup/signup")
const Me=require("../signin/me")

const getManyFonction=async(request,response)=>{
    let result = await userModel.find()
    console.log(result)
    response.send(result)
}
const getByIdFonction = async (request, response) => {
    let result = await userModel.findById(request.params.id)
    response.send(result)
}
const postFonction=(request,response)=>{
    const input=request.body
    let user=new userModel(input)
    userModel.create(user)
    response.send(user)
}
const putManyFonction = async (request, response) => {
    const body = request.body
    let result =await userModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdFonction = async (request, response) => {
    const input = request.body
    let result =await userModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyFonction = async(request,response)=>{
    const input = request.body
    let result= await userModel.deleteMany(input)
    response.send(result)
}
const deleteByIdFonction=async(request,response)=>{
    let result=await userModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const personne ={
    signin,
    signup,
    Me,
    getManyFonction,
    getByIdFonction,
    postFonction,
    putManyFonction,
    putByIdFonction,
    deleteManyFonction,
    deleteByIdFonction
}
module.exports=personne
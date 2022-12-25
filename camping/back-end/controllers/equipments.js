const { request, response } = require("express")
const equipmentsModel = require("../models/equipments")

const getManyEquipments=async(request,response)=>{
    let result = await equipmentsModel.find()
    console.log(result)
    response.send(result)
}
const getByIdEquipments = async (request, response) => {
    let result = await equipmentsModel.findById(request.params.id)
    response.send(result)
}
const postEquipments=(request,response)=>{
    const input=request.body
    let user=new equipmentsModel(input)
    equipmentsModel.create(user)
    response.send(user)
}
const putManyEquipments = async (request, response) => {
    const body = request.body
    let result =await equipmentsModel.updateMany ({ _id: { $in: input.ids } }, body.input)
    response.send(result)
}
const putByIdEquipments = async (request, response) => {
    const input = request.body
    let result =await equipmentsModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    response.send(result)
}
const deleteManyEquipments = async(request,response)=>{
    const input = request.body
    let result= await equipmentsModel.deleteMany(input)
    response.send(result)
}
const deleteByIdEquipments=async(request,response)=>{
    let result=await equipmentsModel.findByIdAndDelete(request.params.id)
    response.send(result)
}
const equipments ={
    getManyEquipments,
    getByIdEquipments,
    postEquipments,
    putManyEquipments,
    putByIdEquipments,
    deleteManyEquipments,
    deleteByIdEquipments
}
module.exports=equipments
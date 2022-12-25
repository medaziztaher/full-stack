const express=require("express")
var route=express.Router()
const equipments=require("../controllers/equipments")
route.get("/aziz",equipments.getManyEquipments)
route.get("/aziz/:id",equipments.getByIdEquipments)
route.post("/aziz",equipments.postEquipments)
route.put("/aziz",equipments.putManyEquipments)
route.put("/aziz/:id",equipments.putByIdEquipments)
route.delete("/aziz",equipments.deleteManyEquipments)
route.delete("/aziz/:id",equipments.deleteByIdEquipments)

module.exports=route
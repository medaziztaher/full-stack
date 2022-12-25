const mongoose=require("mongoose")


const equipments= new mongoose.Schema(
{
    libelle:{type:String},
    description:{type:String},
    prixAlloue:{type:Number},
    prixAchat:{type:Number},
},
{   
    timestamps:true
}
)
const model=mongoose.model("equipments",equipments)
module.exports=model
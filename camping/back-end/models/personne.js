const mongoose=require("mongoose")


const personne= new mongoose.Schema(
{
    cin:{type:Number,unique:true,required:true},
    nom:{type:String},
    prenom:{type:String},
    gender:{type:String},
    mail:{type:String},
    password:{type:String},
    role:{type:String}   
},
{   
    timestamps:true
}
)
const model=mongoose.model("personne",personne)
module.exports=model
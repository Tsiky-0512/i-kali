const mongoose = require("mongoose");

const platSchema = new mongoose.Schema({
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
        require:true
    },
    nom:{
        type:String,
        require:true,
        lowercase: true,
        trim: true
    },
    prix:{
        type:Number,
        require:true,
        min:0
    },
    categorie:{
        type:String,
        require:true
    },
    visibilite:{
        type:Number,
        require:true,
        default:1
    }
})


const Plat = mongoose.model("Plats",platSchema);

module.exports = Plat;
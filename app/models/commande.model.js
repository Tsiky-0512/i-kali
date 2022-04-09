const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user',
            require:true
        },
        plat_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'plat',
            require:true
        },
        qte:{
            type:Number,
            require:true,
            min:1
        },
        montant:{
            type:Number,
            require:true,
            min:200,
        },
        lieudelivraison:{
            type:String,
            required:true
        },
        datedecommande:{
            type:Date,
            require:true,
            default:Date.now
        },
        etat:{
            type:String,
            enum:['LIVRER', 'EN ATTENTE', 'EN COURS'],
            require:true,
            default:'EN ATTENTE'
        }
    }
)


const Commande = mongoose.model("commandes",commandeSchema);

module.exports = Commande;
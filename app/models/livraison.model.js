const mongoose = require("mongoose");

const livraisonSchema = new mongoose.Schema(
    {
        user:Object,
        require:true
    },
    {
        commande:Object,
        require:true
    },
    {
        livreur:Object,
        require:true
    },
    {
        date:Date,
        require:true
    },
    {
        etat:String,
        enum: ['LIVRER', 'EN ATTENTE', 'EN COURS'],
        require:true
    }
)


const Livraison = mongoose.model("livraisons",livraisonSchema);

module.exports = Livraison;
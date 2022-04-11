const Commande = require("../models/commande.model");
const mongoose = require("mongoose");
const CommandeComplet = mongoose.model("View",{},"CommandeComplet");
const { generateData } = require("../services/criteria.services");


exports.save = async (request,response) =>{
    request.body.user = request.userId;
    console.log(request.body);
    request.body.forEach(element => {
      
    });
    const commande = new Commande(request.body);
    try {
      await commande.save();
      response.status(200).send("commande inserted!");
    } catch (error) {
      response.status(500).send(error);
    }
}


exports.saveMultiple = async (request,response) =>{
    try {
      await Commande.insertMany(request.body.data);
      response.status(200).send(
        {
          status:200,
          message:"commande inserted!"
        } 
      );
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
}

exports.find = async (request,response) =>{
  try {
    request.body = generateData(request.body);
    console.log(request.body);

    const commande = await CommandeComplet.aggregate([{$match:request.body}]);
    return response.status(200).send({
      data:commande,
      status:200
    });     
  } catch (error) {
    response.status(500).send(error); 
  }
}

exports.update = async (request,response) =>{
  try {
    const result = await Commande.findOneAndUpdate({_id:request.body._id}, request.body, {
      returnOriginal: false
    });
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.delete = async (request,response) =>{
  try {
    await Commande.deleteOne({_id:request.body._id});
    response.status(200).send("Deleted completed")
  } catch (error) {
    response.status(500).send(error);
  }
}


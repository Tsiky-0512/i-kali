const Plat = require("../models/plat.model");
const { generateData } = require("../services/criteria.services");
const mongoose = require("mongoose");
const PlatRestaurant = mongoose.model("View_2",{},"PlatRestaurant");



exports.save = async (request,response) =>{
    request.body.restaurant_id = request.userId;
    console.log(request.body);
    const plat = new Plat(request.body);
    try {
      const result = await plat.save();
      response.status(200).send({
	      status:200,
        message:"plat inserted!",
        data:result
    	});
    } catch (error) {
      response.status(500).send(error);
    }
}

exports.find = async (request,response) =>{
  try {
    request.body = generateData(request.body)
    console.log({restaurant:request.userId,...request.body});
    const plat = {};
    if (request.role == "restaurant") {
      plat = await Plat.find({restaurant:request.userId,...request.body});
    }else{
      plat = await Plat.find(request.body);
    }
    if (plat[0] instanceof Plat){
        return response.status(200).send({
          status:200,
          data:plat
        });
    } 
    return response.status(400).send("No data!")
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.findComplet = async (request,response) =>{
  try {
    request.body = generateData(request.body)
    const plat = await PlatRestaurant.find(request.body);
    return response.status(200).send({
      status:200,
      data:plat
    });     
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.update = async (request,response) =>{
  try {
    const result = await Plat.findOneAndUpdate({restaurant:request.userId,_id:request.body._id}, request.body, {
      returnOriginal: false
    });
    response.status(200).send({
      status:200,
      data:result
    });
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.delete = async (request,response) =>{
  try {
    request.params._id = mongoose.Types.ObjectId(request.params._id);
    await Plat.deleteOne({restaurant:request.userId,_id:request.params._id});
    response.status(200).send({
      status:200,
      message:"Deleted completed",
      data:{}
    });
  } catch (error) {
    response.status(500).send(error);
  }
}


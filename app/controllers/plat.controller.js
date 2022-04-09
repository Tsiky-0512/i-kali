const Plat = require("../models/plat.model");
const { generateData } = require("../services/criteria.services");

exports.save = async (request,response) =>{
    request.body.restaurant_id = request.userId;
    console.log(request.body);
    const plat = new Plat(request.body);
    try {
      await plat.save();
      response.status(200).send("plat inserted!");
    } catch (error) {
      response.status(500).send(error);
    }
}

exports.find = async (request,response) =>{
  try {
      request.body = generateData(request.body)
    console.log({restaurant:request.userId,...request.body});
    const plat = await Plat.find({restaurant:request.userId,...request.body});
    if (plat[0] instanceof Plat){
        return response.status(200).send(plat);
    } 
    return response.status(400).send("No data!")
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.update = async (request,response) =>{
  try {
    const result = await Plat.findOneAndUpdate({restaurant:request.userId,_id:request.body._id}, request.body, {
      returnOriginal: false
    });
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
}

exports.delete = async (request,response) =>{
  try {
    await Plat.deleteOne({restaurant:request.userId,_id:request.body._id});
    response.status(200).send("Deleted completed")
  } catch (error) {
    response.status(500).send(error);
  }
}


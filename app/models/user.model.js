const mongoose = require("./index").mongoose;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: {
    type: String,
    required:true
  },
  ville: {
    type: String,
  },
  contact: {
    type: String,
    required:true
  },
  role: {
    type: String,
    enum:['admin','restaurant','livreur','client'],
    required:true
  },
  code:{
    type:String 
  },
  activate :{
    type:Number,
    required:true,
    default:0
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;



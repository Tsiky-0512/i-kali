const mongoose = require("mongoose");

const config = require('../config/db.config.js').dbConfig;


mongoose.connect(
    `mongodb+srv://${config.PROJECT}:${config.PASSWORD}@${config.CLUSTER}.mongodb.net/${config.DB}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);




exports.mongoose =  mongoose;    
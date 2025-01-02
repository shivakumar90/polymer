const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  user: {
    type:String,
    ref: 'User', // Links the prediction to a specific user
    required: true,
  },
  question: {
    type: String,
    required: true, // The user's question to be answered
  },
  answer: {
    type: String,
    required: true, // The answer generated by the model
  },
}); 

module.exports = mongoose.model('Prediction', predictionSchema);

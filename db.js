const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
  .then(() => console.log('mongodb is connected successfully'))
  .catch(() => console.log('error in connection mongodb'));
  

}
module.exports = connectToDB
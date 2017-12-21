var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    maxlength: [120,'name cannot exceed 120 characters']
  },
  email:{
    type:String,
    required: [true,"Email field cannot be blank"]
    }
    //unique: true
},
{timestamps: true});

mongoose.model('User',UserSchema);

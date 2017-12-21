console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = mongoose.Schema({
  first_name:{type:String, required: true},
  last_name:{type:String,required:true},
  birthday:{type:Date}
},
{timestamps:true});

var Friend = mongoose.model('Friend',FriendSchema);

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullNames : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    userName : {type: String, required: true, unique: true},
    password : {type: String, required: true}
},
{
    timeStamp: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
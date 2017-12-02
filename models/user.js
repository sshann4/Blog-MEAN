const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let emailLengthChecker = (email) =>{
  if(!email){
    return false;
  } else {
    if(email.length <5 || email.length>30 ){
      return false;
    } else{
      return true;
    }
  }
};

const emailValidator = [
  {
    validator: emailLengthChecker, message: 'email must be more than 5 ch'
  }
]

const userSchema = new Schema({
  email: {type: String, required: true, unique: true, lowercase:true, validate: emailValidator},
  username: {type: String, required: true, unique: true, lowercase:true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);

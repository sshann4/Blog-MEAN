const crypto = require('crypto');
var bcrypt = require('bcrypt');

crypto.randomBytes(256).toString('hex');

module.exports = {//exports node mpdule
  uri:'mongodb://localhost:27017/mean-angular-2',
  secret:'crypto',
  db:'mean-angular-2'
}

// userSchema.pre('save',function(next) {
//   if (!this.isModified('password'))
//   return next();
// })

// userSchema.methods.comparePassword = (password) => {
//   return bcrypt.compareSync(password, this.password)
// };

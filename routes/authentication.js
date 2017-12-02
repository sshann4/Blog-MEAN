const User = require('../models/user')

module.exports = (router) => {

router.post('/register', (req,res) => {
//req.body.email;
//req.body.username;
//req.body.password;
  if(!req.body.email){
    res.json({success: false, message: 'You must provide an email' })
  } else {
    if(!req.body.username){
      res.json({success: false, message: 'You must provide a username' })
    } else {
      if(!req.body.password){
        res.json({success: false, message: 'You must provide a username' })
      } else {//in case all data has been excepted from the user
          let user= new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          });
          user.save((err) => {
            if(err) {
              if (err.code === 11000){
                res.json({success: false, message: 'Username or email already exist '})
              } else {
                res.json({seccess: false, message: 'could not save user to DB'})
              }
            } else{
              res.json({seccess: true, message: 'user has been saved to DB'})
            }
          });
      }
    }
  }
});

return router;

}

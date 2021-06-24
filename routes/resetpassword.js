var express = require('express');
var router = express.Router();

//GET resetpassword
router.get('/:token', async(req, res) => {
  const hashedToken = crypto
  .createHash('sha256')
  .update(req.params.token)
  .digest('hex');
  const user = await User.findOne({passwordResetToken : hashedToken, passwordResetExpires: {$gt: Date.now() }
}); 
res.render("resetpassword",{
  token: req.params.token
 });

});

//POST resetpassword
router.post('/:token', async(req, res, next) => {
  //Get user based on the token
  const hashedToken = crypto
  .createHash('sha256')
  .update(req.params.token)
  .digest('hex');
  const user = await User.findOne({passwordResetToken : hashedToken, passwordResetExpires: {$gt: Date.now() }
 });
  
  //If token has not expired, and there is user, new password
  if(!user) {
   return res.render("resetpassword",{
     token: req.params.token,
     errorMessage: 'Error: User not found'
    });
   
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  
  await user.save();
  console.log(user)
   //Send successful password reset email 
 try{
 await sendEmail({
   email: user.email,
   subject:'Password Reset Successful' , 
   html: `<h1>Congratulations!</h1><br><p>Your password reset was successful. You can now successfully login. </p>`,
   attachments: [ {filename:'Code Queen Logo.png',path:'./src/public/images/Code Queen Logo.png', cid:'unique@logo'}
 ]
 });
  
 res.render("resetpassword",{
   token: req.params.token,
   infoMessage: "Check your email for password change confirmation"
  });
  
 } catch(error) {
   return res.render("resetpassword",{
     token: req.params.token,
     errorMessage: 'Error: There was an error sending the email. Try again later!'
    });
  
  
 }
  
});

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('resetpassword', {  
  });
});*/

module.exports = router;
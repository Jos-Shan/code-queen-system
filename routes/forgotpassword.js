var express = require('express');
var router = express.Router();

// GET forgotpassword
router.get('/', function(req, res) {
  res.render('forgotpassword'); 
});

//POST forgotpassword
router.post('/', async(req, res, next) => {
 //1)get user based on posted Email

const user = await User.findOne({ email: req.body.email }); 

if(!user) {
 return res.render('forgotpassword', {errorMessage: 'Error: User not found' })
};

//2)generate the random reset token
const resetToken = user.createPasswordResetToken();
await user.save({ validateBeforeSave: false});

//3)send it to user's email
const resetURL = `${req.protocol}://${req.get('host')}/resetpassword/${resetToken}`;


try{
  await sendEmail({
    email: user.email,
    subject: 'Your password reset token( valid for 10 mins)',
    html: `<h1>Forgot your password?</h1><br><p> To reset your password, please submit a request with your new password and passwordConfirm on this link : ${resetURL}\n.
    If you didn't forget your password, please ignore this email.</p><img style="width:250px; src="cid:unique@logo/>`,
    attachments: [ {filename:'Code Queen Logo.png',path:'./src/public/images/Code Queen Logo.png', cid:'unique@logo'}
]
  
  });
  return res.render('forgotpassword', { successMessage: "Success: Reset Token sent to Email" })
  
  } catch(error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({validateBeforeSave: false});
   
    return  res.render('forgotpassword', { errorMessage: "Error: There was an error sending the email. Try again later!" })
  }
 
});
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('forgotpassword', {  
  });
});*/

module.exports = router;
var nodemailer = require('nodemailer'),
    router = require('express').Router(),
    gmailAccount = require('./../gmailAccount.json');


// !!! Remember to change the gmail setting so that it allows authentication from "Less secure app"
// Or the authentication WILL fail, and email won't be sent

router.post('/', function(req,res){

    var mailOpts, smtpTrans;

    var mailName = req.body.name,
        mailEmail = req.body.email,
        mailMsg = req.body.msg;

    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'gmail',
        auth: gmailAccount
    });

    mailOpts = {
        from: mailName + '&lt;' + mailEmail + '&gt;',
        to: 'ginzh2b@gmail.com',
        subject: 'Website Contact Form - ' + mailName + '<' + mailEmail + '>',
        text: mailMsg
    }

    smtpTrans.sendMail(mailOpts, function(error, response) {
        if (error) {
            response.json({error: error});
            res.send(500);
            console.log(error);
        } else {
            res.send(200);
            console.log('email sent')
        }
    })
});

module.exports = router;
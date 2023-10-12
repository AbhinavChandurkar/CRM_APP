/**
 *  this file will have logic for sending email 
 */


const nodemailer = require('nodemailer');

/**
 * I need to setup up nodemailer for sesnding emails
 * smtp host details
 * credentail if needed
 * 
 */

 module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'devlopment47@gmail.com',
        pass : 'abhinav123'
    },
    secure : true
});

/**
 * transporter will be used to send the email
 */


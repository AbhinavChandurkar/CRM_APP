const cron  = require("node-cron");
const Notification = require("../models/notification.model");
const constants = require("../utlis/constant");
const emailTransporter = require("../notifier/emailService");

//Every thirty second, send the email notification for each new request
cron.schedule('*/30 * * * * *',async ()=>{

    console.log('Cron started');
    /**
     * I need to send emails
     * 
     * 1. Get the list of all the notifications to be sent
     * 2. Send email for each notifications
     */

    const notifications = await Notification.find({
        sentStatus : constants.sentStatus.unsent
    })   
    
    notifications.forEach( notification => {
       
        const mailData = {
            from : 'crm-notification-service@gmail.com',
            to : notification.recepientEmails,
            subject : notification.subject,
            text : notification.content
        };
        
        emailTransporter.sendMail(mailData,async (err, info)=>{
            if(err){
                console.log("Some error happened", err);
            }else{
                //Update the status of the notification
                const savedNotification = await Notification.findOne({
                    _id : notification._id
                });
                savedNotification.sentStatus = constants.sentStatus.sent;

                await savedNotification.save();
            }
        })

        
    })
})
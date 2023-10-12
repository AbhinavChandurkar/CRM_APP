/**
 * this will contain the routes for the the ticket notifaction request 
 */
const notifactionController = require("../controllers/notification.controller")

module.exports = (app) =>{
    app.post("/notifServ/api/v1/notifications",notifactionController.acceptNotificationRequest);
    app.get("/notifServ/api/v1/notifications/:id",notifactionController.getNotificationStatus);

}
import express from "express"
import hometroller from "../controllers/HomeController"

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', hometroller.getHomePage);

    router.post('/setup-profile', hometroller.setupProfile);

    app.post('/webhook', hometroller.postWebhook);
    app.get('/webhook', hometroller.getWebhook);

    router.post('/setup-persistent-menu', hometroller.setupPersistentMenu);
   
    return app.use('/', router);
};

module.exports = initWebRoutes;
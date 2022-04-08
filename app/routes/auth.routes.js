const controller = require("../controllers/auth.controller.js");

module.exports = function (app) {
    app.post("/auth/user/inscription",controller.inscription);
    app.post("/auth/user/check",controller.verifyEmail);
    app.post("/auth/user/login",controller.login);
}
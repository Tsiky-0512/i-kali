const controller = require("../controllers/auth.controller.js");

module.exports = function (app) {
    app.post("/auth/user",controller.save);
    app.get("/auth/user",controller.find);
    app.put("/auth/user",controller.update);
    app.delete("/auth/user",controller.delete);
    app.get("auth/user/signout",controller.signout);
}
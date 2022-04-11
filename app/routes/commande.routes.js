const controller = require("../controllers/commande.controller.js");
const { authJwt } = require("../middleware");

module.exports = function (app) {
    app.post("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.save);
    app.get("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.find);
    app.put("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.update);
    app.delete("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.delete);
}
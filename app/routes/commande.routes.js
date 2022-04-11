const controller = require("../controllers/commande.controller.js");
const { authJwt } = require("../middleware/index.js");

module.exports = function (app) {
    app.post("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.save);
    app.post("/commande/multiple",[authJwt.verifyToken,authJwt.isActivate],controller.saveMultiple);
    app.get("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.find);
    app.put("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.update);
    app.delete("/commande",[authJwt.verifyToken,authJwt.isActivate],controller.delete);
}
const controller = require("../controllers/plat.controller.js");
const { authJwt } = require("../middleware/index.js");

module.exports = function (app) {
    app.post("/plat",[authJwt.verifyToken,authJwt.isActivate],controller.save);
    app.post("/plat/list",[authJwt.verifyToken,authJwt.isActivate],controller.find);
    app.put("/plat",[authJwt.verifyToken,authJwt.isActivate],controller.update);
    app.delete("/plat/:_id",[authJwt.verifyToken,authJwt.isActivate],controller.delete);
    app.post("/plat/list/complet",[authJwt.verifyToken,authJwt.isActivate],controller.findComplet);
}
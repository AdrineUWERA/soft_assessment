"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = require("../controllers/user.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userRouter = _express.default.Router();
userRouter.post("/signup", _user.signup);
userRouter.get("/:id", _user.getOneUser);
userRouter.get("/", _user.getAllUsers);
userRouter.post("/login", _user.login);
var _default = userRouter;
exports.default = _default;
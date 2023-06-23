"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.route"));
var _operation = _interopRequireDefault(require("./operation.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Home route"
  });
});
router.use("/users", _user.default);
router.use("/operations", _operation.default);
var _default = router;
exports.default = _default;
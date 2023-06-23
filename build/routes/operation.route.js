"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _operation = require("../controllers/operation.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const operationsRoute = _express.default.Router();
operationsRoute.post("/checkInOut/:id", _operation.checkin);
var _default = operationsRoute;
exports.default = _default;
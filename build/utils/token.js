"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeToken = decodeToken;
exports.generateToken = generateToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function generateToken(payload) {
  const token = _jsonwebtoken.default.sign(payload, process.env.JWT_SECRET);
  return token;
}
function decodeToken(token) {
  const verify = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
  return verify;
}
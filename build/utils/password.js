"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = comparePassword;
exports.hashPassword = hashPassword;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  hash,
  compare
} = _bcrypt.default;
async function hashPassword(password) {
  const result = await hash(password, 10);
  return result;
}
async function comparePassword(plainPassword, hashedPassword) {
  const result = await compare(plainPassword, hashedPassword);
  return result;
}
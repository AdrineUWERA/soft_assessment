"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.getAllUser = getAllUser;
exports.getUserByEmail = getUserByEmail;
exports.getUserById = getUserById;
var _user = _interopRequireDefault(require("../database/model/user.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createUser(details) {
  const user = await _user.default.create(details);
  return user;
}
async function getUserByEmail(email) {
  const user = await _user.default.findOne({
    where: {
      email
    }
  });
  return user;
}
async function getAllUser(email) {
  const users = await _user.default.findAll();
  return users;
}
async function getUserById(id) {
  const user = await _user.default.findByPk(id);
  return user;
}
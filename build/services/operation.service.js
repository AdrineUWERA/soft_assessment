"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOperation = createOperation;
exports.getOperationByUserId = getOperationByUserId;
exports.getUserLatestOperation = getUserLatestOperation;
var _operation = _interopRequireDefault(require("../database/model/operation.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createOperation(details) {
  const operation = await _operation.default.create(details);
  return operation;
}
async function getOperationByUserId(id) {
  const operation = await _operation.default.findOne({
    where: {
      userId: id
    }
  });
  return operation;
}
async function getUserLatestOperation(userId) {
  const operation = await _operation.default.findOne({
    where: {
      userId: userId
    },
    order: [["date", "DESC"]]
  });
  return operation;
}
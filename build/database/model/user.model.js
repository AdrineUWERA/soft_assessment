"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../config/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _db.default.define('users', {
  id: {
    type: _sequelize.DataTypes.UUID,
    defaultValue: _sequelize.DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  fullName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  }
});
var _default = User;
exports.default = _default;
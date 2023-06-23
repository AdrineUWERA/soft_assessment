"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../config/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Operation = _db.default.define('operations', {
  id: {
    type: _sequelize.DataTypes.UUID,
    defaultValue: _sequelize.DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: _sequelize.DataTypes.UUID,
    allowNull: false
  },
  location: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  checkInOutTime: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  checkType: {
    type: _sequelize.DataTypes.ENUM('IN', 'OUT'),
    defaultValue: 'IN'
  },
  date: {
    type: _sequelize.DataTypes.DATEONLY,
    defaultValue: _sequelize.Sequelize.literal('NOW()'),
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: _sequelize.DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: _sequelize.DataTypes.DATE
  }
});
var _default = Operation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uuid = require("uuid");
var _sequelize = require("sequelize");
const migration = {
  async up(queryInterface) {
    await queryInterface.createTable('operations', {
      id: {
        type: _sequelize.DataTypes.UUID,
        defaultValue: _uuid.v4,
        primaryKey: true,
        allowNull: false
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
        type: _sequelize.DataTypes.DATE,
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable('operations');
  }
};
var _default = migration;
exports.default = _default;
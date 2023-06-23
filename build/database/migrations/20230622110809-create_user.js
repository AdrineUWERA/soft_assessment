"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uuid = require("uuid");
var _sequelize = require("sequelize");
const migration = {
  async up(queryInterface) {
    await queryInterface.createTable("users", {
      id: {
        type: _sequelize.DataTypes.UUID,
        defaultValue: _uuid.v4,
        primaryKey: true,
        allowNull: false
      },
      fullName: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: _sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable("users");
  }
};
var _default = migration;
exports.default = _default;
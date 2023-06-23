"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _config = _interopRequireDefault(require("./config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const env = process.env.NODE_ENV;
const db = _config.default[env];
const dbConfig = {
  dialect: process.env.DB_DIALECT,
  logging: false
};
if (process.env.SSL === "true") {
  dbConfig.dialectOptions = {
    connectTimeout: 80000,
    logging: false,
    ssl: Boolean(process.env.SSL)
  };
}
const sequelize = new _sequelize.Sequelize(db.url, dbConfig);
sequelize.authenticate();
var _default = sequelize;
exports.default = _default;
"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const {
  DATABASE_URL,
  SSL
} = process.env;
const ssl = Boolean(SSL);
module.exports = {
  development: {
    url: DATABASE_URL,
    dialectOptions: {
      ssl
    }
  }
};
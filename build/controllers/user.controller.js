"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.login = exports.getOneUser = exports.getAllUsers = void 0;
var _user = require("../services/user.service");
var _token = require("../utils/token");
var _password = require("../utils/password");
const signup = async (req, res) => {
  const hashedPassword = await (0, _password.hashPassword)(req.body.password);
  const details = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashedPassword
  };
  const user = await (0, _user.createUser)(details);
  return res.status(201).json({
    code: 201,
    message: "User created",
    user
  });
};
exports.signup = signup;
const getOneUser = async (req, res) => {
  const user = await (0, _user.getUserById)(req.params.id);
  return res.status(200).json({
    code: 200,
    message: "User fetched",
    user
  });
};
exports.getOneUser = getOneUser;
const getAllUsers = async (req, res) => {
  const users = await (0, _user.getAllUser)();
  return res.status(200).json({
    code: 200,
    message: "Users fetched",
    users
  });
};
exports.getAllUsers = getAllUsers;
const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  const userExists = await (0, _user.getUserByEmail)(email);
  if (userExists) {
    if ((0, _password.comparePassword)(password, userExists.password)) {
      const body = {
        id: userExists.id,
        email: userExists.email,
        fullName: userExists.fullName
      };
      const token = (0, _token.generateToken)(body);
      return res.status(200).json({
        code: 200,
        message: "Logged in successfully",
        token
      });
    } else {
      return res.status(401).json({
        code: 401,
        message: "Paswword is incorrect"
      });
    }
  } else {
    return res.status(404).json({
      code: 404,
      message: "User not found"
    });
  }
};
exports.login = login;
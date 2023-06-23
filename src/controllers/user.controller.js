import {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUser,
} from "../services/user.service";
import { generateToken } from "../utils/token";
import { hashPassword, comparePassword } from "../utils/password";

const signup = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const details = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashedPassword,
  };
  const user = await createUser(details);
  const body = {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
  };
  const token = generateToken(body);
  return res
    .status(201)
    .json({ code: 201, message: "User created", user, token });
};

const getOneUser = async (req, res) => {
  const user = await getUserById(req.params.id);
  return res.status(200).json({ code: 200, message: "User fetched", user });
};

const getAllUsers = async (req, res) => {
  const users = await getAllUser();
  return res.status(200).json({ code: 200, message: "Users fetched", users });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await getUserByEmail(email);
  if (userExists) {
    if (comparePassword(password, userExists.password)) {
      const body = {
        id: userExists.id,
        email: userExists.email,
        fullName: userExists.fullName,
      };
      const token = generateToken(body);
      return res
        .status(200)
        .json({ code: 200, message: "Logged in successfully", token });
    } else {
      return res
        .status(401)
        .json({ code: 401, message: "Password is incorrect" });
    }
  } else {
    return res.status(404).json({ code: 404, message: "User not found" });
  }
};

export { signup, getOneUser, login, getAllUsers };

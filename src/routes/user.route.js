import express from "express";
import { signup, getOneUser, login, getAllUsers } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.get("/:id", getOneUser);
userRouter.get("/", getAllUsers);
userRouter.post("/login", login);

export default userRouter;

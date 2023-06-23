import express from "express";
import userRoutes from "./user.route";
import operationsRoute from './operation.route';

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Home route" });
});

router.use("/users", userRoutes);
router.use("/operations", operationsRoute);

export default router;

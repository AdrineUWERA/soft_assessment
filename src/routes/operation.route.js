import express from "express";
import { checkin, getLatestRecord } from "../controllers/operation.controller";

const operationsRoute = express.Router();

operationsRoute.post("/checkInOut/:id", checkin);
operationsRoute.get("/:userId", getLatestRecord);

export default operationsRoute;

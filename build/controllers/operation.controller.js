"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkin = void 0;
var _operation = require("../services/operation.service");
const checkin = async (req, res) => {
  console.log("hi1");
  const userStatus = await (0, _operation.getUserLatestOperation)(req.params.id);
  console.log(userStatus);
  console.log("hi2");
  const body = {
    userId: req.params.id,
    location: req.body.location,
    checkInOutTime: req.body.checkInOutTime,
    date: req.body.date
  };
  if (userStatus) {
    console.log("hi3");
    if (userStatus.checkType === "OUT") {
      console.log("hi4");
      const checkin = await (0, _operation.createOperation)({
        ...body,
        checkType: "IN"
      });
      return res.status(201).json({
        code: 201,
        message: "Checked In",
        checkin
      });
    } else if (userStatus.checkType === "IN") {
      console.log("hi5");
      const checkout = await (0, _operation.createOperation)({
        ...body,
        checkType: "OUT"
      });
      return res.status(201).json({
        code: 201,
        message: "Checked out",
        checkout
      });
    }
  }
  const checkin = await (0, _operation.createOperation)({
    ...body,
    checkType: "IN"
  });
  return res.status(201).json({
    code: 201,
    message: "Checked In",
    checkin
  });
};
exports.checkin = checkin;
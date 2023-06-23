import {
  createOperation,
  getUserLatestOperation,
} from "../services/operation.service";
import moment from "moment-timezone";

const checkin = async (req, res) => {
  const userStatus = await getUserLatestOperation(req.params.id);
  const latitude = req.body.location.latitude;
  const longitude = req.body.location.longitude;
  const location = {
    longitude,
    latitude,
  };

  const timeZone = moment.tz.guess(latitude, longitude);

  const currentDate = moment().tz(timeZone).format("YYYY-MM-DDTHH:mm:ss.SSS");
  const currentTime = moment().tz(timeZone).format("HH:mm:ss");

  const body = {
    userId: req.params.id,
    location,
    checkInOutTime: currentTime,
    date: currentDate,
  };
  if (userStatus) {
    if (userStatus.checkType === "OUT") {

      const checkin = await createOperation({ ...body, checkType: "IN" });
      return res
        .status(201)
        .json({ code: 201, message: "Checked In", checkin });
    } else if (userStatus.checkType === "IN") {
      const checkout = await createOperation({ ...body, checkType: "OUT" });
      return res
        .status(201)
        .json({ code: 201, message: "Checked out", checkout });
    }
  }
  const checkin = await createOperation({ ...body, checkType: "IN" });
  return res.status(201).json({ code: 201, message: "Checked In", checkin });
};

const getLatestRecord = async (req, res) => {
  const latest = await getUserLatestOperation(req.params.userId);
  if (latest) {
    return res.status(200).json({
      code: 200,
      message: "User's lastest operation",
      latest,
    });
  }
  return res
    .status(404)
    .json({ code: 404, message: "User has no operations yet" });
};

export { checkin, getLatestRecord };

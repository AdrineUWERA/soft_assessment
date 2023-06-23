import Operation from "../database/model/operation.model";

async function createOperation(details) {
  const operation = await Operation.create(details);
  return operation;
}

async function getOperationByUserId(id) {
  const operation = await Operation.findOne({ where: { userId: id } });
  return operation;
}
async function getUserLatestOperation(userId) {
  const operation = await Operation.findOne({
    where: {
      userId: userId,
    },
    order: [["date", "DESC"]],
  });
  return operation;
}

export { createOperation, getOperationByUserId, getUserLatestOperation };

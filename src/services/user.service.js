import User from "../database/model/user.model";

async function createUser(details) {
  const user = await User.create(details);
  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

async function getAllUser(email) {
  const users = await User.findAll();
  return users;
}
async function getUserById(id) {
  const user = await User.findByPk(id);
  return user;
}

export { createUser, getUserByEmail, getUserById, getAllUser };

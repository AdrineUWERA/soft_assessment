import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Operation = sequelize.define('operations', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  location: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  checkInOutTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkType: {
    type: DataTypes.ENUM('IN', 'OUT'),
    defaultValue: 'IN',
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('NOW()'),
    allowNull: false,
  }, 
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },

});

export default Operation;

import { v4 as uuidv4 } from 'uuid';
import { Sequelize, DataTypes } from 'sequelize';

const migration = {
  async up(queryInterface) {
    await queryInterface.createTable('operations', {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable('operations');
  },
};

export default migration;

'use strict';
const { DataType } = require('sequelize-typescript')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event', {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      description: {
        type: DataType.STRING,
        allowNull: false,
      },
      start_date_time: {
        type: DataType.DATE,
        allowNull: true,
      },
      end_date_time: {
        type: DataType.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataType.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataType.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: DataType.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Event');
  }
};

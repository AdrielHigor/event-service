'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Event', 'location_id', {
      type: DataTypes.INTEGER,
      references: {
        model: 'Location',
        key: 'id',
      },
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Event', 'location_id');
  }
};

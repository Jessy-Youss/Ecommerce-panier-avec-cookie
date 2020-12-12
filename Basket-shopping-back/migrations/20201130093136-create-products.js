'use strict';
const tableName = 'products';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price:{
        type: Sequelize.FLOAT(11),
      },
      pictures:{
         type:Sequelize.TEXT  
      }
  })
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};

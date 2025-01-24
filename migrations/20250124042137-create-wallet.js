'use strict';  
  
module.exports = {  
  async up(queryInterface, Sequelize) {  
    await queryInterface.createTable('Wallets', {  
      id: {  
        allowNull: false,  
        autoIncrement: true,  
        primaryKey: true,  
        type: Sequelize.INTEGER,  
      },  
      balance: {  
        type: Sequelize.FLOAT,  
        allowNull: false,  
        defaultValue: 0.0,  
      },  
      userId: {  
        type: Sequelize.INTEGER,  
        allowNull: false,  
        references: {  
          model: 'Users',  
          key: 'id',  
        },  
        onUpdate: 'CASCADE',  
        onDelete: 'CASCADE',  
      },  
      createdAt: {  
        allowNull: false,  
        type: Sequelize.DATE,  
      },  
      updatedAt: {  
        allowNull: false,  
        type: Sequelize.DATE,  
      },  
    });  
  },  
  async down(queryInterface, Sequelize) {  
    await queryInterface.dropTable('Wallets');  
  },  
};
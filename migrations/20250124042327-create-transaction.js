'use strict';  
  
module.exports = {  
  async up(queryInterface, Sequelize) {  
    await queryInterface.createTable('Transactions', {  
      id: {  
        allowNull: false,  
        autoIncrement: true,  
        primaryKey: true,  
        type: Sequelize.INTEGER,  
      },  
      amount: {  
        type: Sequelize.FLOAT,  
        allowNull: false,  
      },  
      type: {  
        type: Sequelize.ENUM('deposit', 'withdraw'),  
        allowNull: false,  
      },  
      description: {  
        type: Sequelize.STRING,  
        allowNull: true,  
      },  
      walletId: {  
        type: Sequelize.INTEGER,  
        allowNull: false,  
        references: {  
          model: 'Wallets',  
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
    await queryInterface.dropTable('Transactions');  
  },  
};
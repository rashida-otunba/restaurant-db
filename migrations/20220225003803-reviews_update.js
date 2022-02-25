'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('review_tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewer_id: {
        type: Sequelize.INTEGER, 
        onDelete:'CASCADE',
        references:{
          model: 'reviewer',
          key: 'id',
          as:"reviewer_id"
        }
      },
      stars: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      restaurant_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('review_tables');
  }
}
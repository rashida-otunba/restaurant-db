'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('review_tables',{
        
      fields:['restaurant_id'],
      type: 'foreign key', 
        name: 'restaurantID_fkey',
        references:{
          table: 'restaurants',
          field: 'id', 
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('review_tables');
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('review_tables',{
        
      fields:['reviewer_id'],
      type: 'foreign key', 
        name: 'reviewID_fkey',
        references:{
          table: 'reviewers',
          field: 'id', 
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('review_tables');
  }
}

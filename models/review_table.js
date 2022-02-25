'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review_tables.belongsTo(models.reviewers, {
        foreignKey: 'reviewer_id',
        onDelete: 'CASCADE'
    });
    review_tables.belongsTo(models.restaurants, {
      foreignKey: 'restaurant_id',
      onDelete: 'CASCADE'
  });
}
  };
  review_table.init({
    reviewer_id: DataTypes.INTEGER,
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0, 
        max: 5, }
    },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review_table',
  });
  return review_table;
};
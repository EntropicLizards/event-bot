var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    timezone_id: { type: Sequelize.INTEGER, allowNull: false },
  });
};
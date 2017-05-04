var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('timezone', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: { type: Sequelize.STRING, allowNull: false}
  });
};
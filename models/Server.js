var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('server', {
    id: {type: Sequelize.INTEGER, primaryKey: true}
  });
};
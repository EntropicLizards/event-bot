var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('channel', {
    id: {type: Sequelize.INTEGER, primaryKey: true}
  });
};
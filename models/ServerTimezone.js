var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('server_timezone', {
    timezone_id: { type: Sequelize.INTEGER, primaryKey: true },
    server_id: { type: Sequelize.INTEGER, primaryKey: true },
  });
};
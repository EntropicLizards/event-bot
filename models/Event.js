var Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('event', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: { type: Sequelize.STRING, allowNull: false},
    time: { type: Sequelize.DATE, allowNull: false},
    completed: { type: Sequelize.BOOLEAN, allowNull: false},
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    channel_id: { type: Sequelize.INTEGER, allowNull: false },
    server_id: { type: Sequelize.INTEGER, allowNull: false },
  });
};
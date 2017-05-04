var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'db.sqlite'
})

var Channel        = require('./Channel')(sequelize),
    Server         = require('./Server')(sequelize),
    User           = require('./User')(sequelize),
    Event          = require('./Event')(sequelize),
    ServerTimezone = require('./ServerTimezone')(sequelize);

User.hasMany(Event, {foreignKey: 'user_id', sourceKey: 'id'});
Event.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'});

Channel.hasMany(Event, {foreignKey: 'channel_id', sourceKey: 'id'});
Event.belongsTo(Channel, {foreignKey: 'channel_id', targetKey: 'id'});

Server.hasMany(Event, {foreignKey: 'server_id', sourceKey: 'id'});
Event.belongsTo(Server, {foreignKey: 'server_id', targetKey: 'id'});

Server.hasMany(ServerTimezone, {foreignKey: 'server_id', sourceKey: 'id'});
ServerTimezone.belongsTo(Server, {foreignKey: 'server_id', targetKey: 'id'});

global.Channel = Channel;
global.Server = Server;
global.User = User;
global.Event = Event;
global.ServerTimezone = ServerTimezone;
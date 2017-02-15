module.exports = function init_session(app){
    var session = require('express-session');
    var mongoose = require('mongoose');
    var MongoStore = require('connect-mongo')(session);
    mongoose.connect('mongodb://localhost:27017/myblog');
    mongoose.connection.on('error', console.error.bind(console, '连接数据库失败'));
    app.use(session({
        key: 'session',
        secret: 'Keboard cat',
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
        store: new MongoStore({
            db:'myblog',
            mongooseConnection: mongoose.connection
        }),
        resave:false,
        saveUninitialized: true
    }))
}
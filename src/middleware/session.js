import session from 'express-session';
import mongoose from 'mongoose';
import express from 'express';

mongoose.Promise = require('bluebird');

let initSession = (app) => {
    mongoose.connect('mongodb://localhost:27017');
    mongoose.connection.on('error', console.error.bind(console, '连接数据库失败'));
    app.use(session({
        key: 'session',
        secret: 'Keboard cat',
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
        resave:false,
        saveUninitialized: true
    }));
};

export default initSession;

import express from 'express';
import bodyParser from 'body-parser';
import routes from './modules/routes/base.router';
import middleware from './middleware/';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

middleware.initSession(app);
routes(app);

const start = () => {
  middleware.initHttps(app);
};

exports.start = start;

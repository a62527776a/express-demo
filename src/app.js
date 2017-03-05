import express from 'express';
import bodyParser from 'body-parser';

import initSession from './middleware/session';
import routes from './modules/routes/base.router';
import initHttps from './middleware/https';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

initSession(app);
routes(app);

const start = () => {
  initHttps(app);
};

exports.start = start;

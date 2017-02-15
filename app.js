const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./modules/routes/base.router');
const init_session = require('./middleware/session');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);
init_session(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('server start on ' + PORT)
})
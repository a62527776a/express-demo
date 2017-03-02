import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import init_session from './middleware/session'
import routes from './modules/routes/base.router'
let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

init_session(app);
routes(app);

const PORT = 5000;

const start = () => {
  app.listen(PORT, () => {
    console.log('server start on ' + PORT)
  })
}

exports.start = start
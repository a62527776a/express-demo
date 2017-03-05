import fs from 'fs';
import path from 'path';
import https from 'https';

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../static/https/https.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../static/https/https.crt.crt'))
};

const PORT = 8080;

const initHttps = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../../static/https/index.html')
    )
  })
  const server = https.createServer(httpsOptions, app);
  server.listen(PORT, () => {
    console.log(`server start on ${PORT}`);
  });
};

export default initHttps;
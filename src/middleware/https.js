import fs from 'fs';
import path from 'path';
import https from 'https';
import net from 'net';
import crypto from 'crypto';

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../static/https/https.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../static/https/https.crt.crt'))
};

const PORT = 5000;
const TCPPORT = 8124;

const initHttps = (app) => {
  const server = https.createServer(httpsOptions, app);
  const tcpServer = net.createServer((socket) => {
    socket.on('data', (data) => {
      // /Sec\-WebSocket\-Key:\s(.+)\r\n/
    })
  });
  tcpServer.listen();
  server.listen(PORT, () => {
    console.log(`server start on ${PORT}`);
  });
  tcpServer.listen(TCPPORT, () => {
    console.log(`tcpServer start on ${TCPPORT}`);
  })
};

export default initHttps;
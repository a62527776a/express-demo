import fs from 'fs';
import path from 'path';
import https from 'https';
import net from 'net';
import crypto from 'crypto';

const wsGUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../static/https/https.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../static/https/https.crt.crt'))
};

const PORT = 5000;
const TCPPORT = 8124;

const initHttps = (app) => {
  const server = https.createServer(httpsOptions, app);
  const tcpServer = net.createServer((socket) => {
    console.info('tcp client connected');
    socket.on('data', (data) => {
    let dataString = data.toString(),
      key = getWebSocketKey(dataString),
      acceptKey;
      if (key) {
        console.info(key);
        acceptKey = genAcceptKey(key);
        socket.write('HTTP/1.1 101 Switching Protocols\r\n');
        socket.write('Upgrade: websocket\r\n');
        socket.write('Connection: Upgrade\r\n');
        socket.write('Sec-WebSocket-Accept: ' + acceptKey + '\r\n');
        socket.write('\r\n');
      }
      // /Sec\-WebSocket\-Key:\s(.+)\r\n/
    });
    socket.on('end', function() {
      console.info('client disconnected');
    });
  });
  tcpServer.listen();
  server.listen(PORT, () => {
    console.log(`server start on ${PORT}`);
  });
  tcpServer.listen(TCPPORT, () => {
    console.log(`tcpServer start on ${TCPPORT}`);
  });
};

export default initHttps;
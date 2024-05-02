const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const privateKey = fs.readFileSync('cert/server.key');
const certificate = fs.readFileSync('cert/server.crt');

const app = express();
app.use(redirectToHTTPS());
app.use('/', express.static(path.join(__dirname, 'Yuanshenditu')));

const server = https.createServer({
  key: privateKey,
  cert: certificate
}, app);

server.listen(8080, () => {
  console.log(`Server running on port https://localhost:8080/`);
});

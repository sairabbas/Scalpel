<<<<<<< HEAD
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.js'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
=======
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.js'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
>>>>>>> bdbd60bd9447a462f05c3dd7c11d8dbead379339
});
const path = require('path');
const express = require('express');
const cors = require('cors');

// Loads env variables
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const gameRouter = require('./routes/game');

const app = express();
app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());

app.use(gameRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

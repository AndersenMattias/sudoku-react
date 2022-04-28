const path = require('path');
const cors = require('cors');
const express = require('express');
// Loads env variables
require('dotenv').config()

const gameRouter = require('./routes/game');

const app = express();
const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());
app.use(cors());

app.use(gameRouter)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
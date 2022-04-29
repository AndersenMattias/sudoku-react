const path = require('path');
const express = require('express');

// Loads env variables
require('dotenv').config()

const gameRouter = require('./routes/game');
const PORT = process.env.PORT || 5000;


const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());

app.use(gameRouter)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
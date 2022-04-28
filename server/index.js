const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
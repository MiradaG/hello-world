const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, (error) => {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});

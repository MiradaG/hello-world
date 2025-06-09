const express = require('express');
const app = express();
const port = 3000;;;;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ❌ Deliberate error: Missing closing parenthesis
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
; // <-- Error: this semicolon prematurely ends the block

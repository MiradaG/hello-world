const express = require('express');
const app = express();
const port = 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // next();   <-- ❌ ERROR: forgot to call next() will hang all requests
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!')
}); // ❌ Missing semicolon would not crash but is bad practice

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.')
}); // ❌ Same as above

// Contact route (POST)
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }
  res.json({ status: 'Message received', name, message }); // ✅ This is correct
});

// ❌ ERROR: 404 handler placed before error handler — this is okay, but next one is not
// ❌ ERROR: Missing `next` parameter in the global error handler
app.use((err, req, res) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port () => { // ❌ ERROR: Missing comma between `port` and the callback
  console.log(`Server is running at http://localhost:${port}`);
});

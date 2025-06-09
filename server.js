const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}); // Corrected: added next() call

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
}); // Corrected: added semicolon

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
}); // Corrected: added semicolon

// Contact route (POST)
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }
  res.json({ status: 'Message received', name, message }); // This is correct
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Oops! Not Found.');
});

// Global error handler
app.use((err, req, res, next) => { // Corrected: added next parameter
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => { // Corrected: added comma between port and the callback
  console.log(`Server is running at http://localhost:${port}`);
});

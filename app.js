const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the portfolio homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Process the form data (e.g., save to database, send email, etc.)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
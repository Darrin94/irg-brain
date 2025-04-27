const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const smsRoutes = require('./routes/smsRoutes');
const chatRoutes = require('./routes/chatRoutes');

app.use('/api', smsRoutes);
app.use('/api', chatRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('IRG Brain is alive 🚀');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

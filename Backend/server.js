require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

// Database connection
connectDB().catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});

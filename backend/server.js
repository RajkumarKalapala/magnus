const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

const app = express();

// ✅ Serve uploaded files (IMPORTANT - place early)
app.use('/uploads', express.static('uploads'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
const imageRoutes = require('./routes/imageRoutes');
app.use('/api/images', imageRoutes);

// Test route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Magnus Backend is running successfully!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

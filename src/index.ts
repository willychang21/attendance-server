import express = require('express');
import cors = require('cors');
import dotenv = require('dotenv');
import mongoose from 'mongoose';
import attendanceRoutes from './routes/attendanceRoutes';

// configure environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// middleware
app.use(cors());
app.use(express.json());
app.use('/api/attendance', attendanceRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

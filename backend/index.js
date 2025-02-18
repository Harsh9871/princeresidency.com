import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Importing assetRoutes
import assetRoutes from './utils/assetUtils.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use asset routes for serving assets
app.use('/assets', assetRoutes); 

// form routes
import formRoutes from './routes/formRoutes.js';
app.use('/api/forms', formRoutes);

import ExploreRoutes from './routes/exploreRoutes.js';
app.use('/explore', ExploreRoutes);

import uploadServiceRoutes from './routes/uploadServiceRoutes.js';
app.use('/upload', uploadServiceRoutes);

import authRoutes from './routes/authRoutes.js';
app.use("/auth", authRoutes);

import reserve from './routes/reservationRoute.js'
app.use('/reserve',reserve);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


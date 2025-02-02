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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


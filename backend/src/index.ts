import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './lib/db';
import productRoutes from './routes/product.routes';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '4000');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

// connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// });

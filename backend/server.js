import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

// Ensure database connection
await connectDB();

// Define API route
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/user',userRouter)
// Export as a Vercel handler
export default app;

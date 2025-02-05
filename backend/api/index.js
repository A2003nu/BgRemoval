import app from '../server.js';
import { createServer } from '@vercel/node';

// Convert Express app to Serverless function
export default createServer(app);

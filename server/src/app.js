import 'dotenv/config';
import express from "express";
import userRoutes from "./routes/user.routes.js";

import cors from './Middleware/cors.js';
import authTokenRouter from './Middleware/auth.js';

const app = express();

app.use(cors);
app.use(express.json());

app.use(authTokenRouter)
app.use(userRoutes);
// app.use(scheduleRoutes);

export default app;
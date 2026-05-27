import express from "express"; // ecma import
import studentRouter from './src/routes/studentRoutes'

const app = express();
app.use(express.json());

app.use('/students', studentRouter)


export default app;

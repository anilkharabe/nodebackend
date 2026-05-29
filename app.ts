import express from "express"; // ecma import
import studentRouter from './src/routes/studentRoutes';
import loggerMiddleware from './src/middleware/loggerMiddleware';

const app = express();

// in-build middleware
app.use(express.json());


// custum middleware
app.use(loggerMiddleware)

app.use('/students', studentRouter)


export default app;

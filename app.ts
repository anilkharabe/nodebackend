import express from "express"; // ecma import
import studentRouter from './src/routes/studentRoutes'

const app = express();

// in-build middleware
app.use(express.json());


// custum middleware
const loggerMiddleware = (req: any, res: any, next: any)=>{
    console.log("logger middleware is called")
    next();
}

app.use(loggerMiddleware)

app.use('/students', studentRouter)


export default app;

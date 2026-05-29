import { timeStamp } from "node:console";
import logger from "../utils/logger";

const loggerMiddleware = (req: any, res: any, next: any)=>{
    logger.info({
        method: req.method,
        url: req.originalUrl,
        body: req.body,
        timestamp: new Date().toISOString()
    })
    next();
}

export default loggerMiddleware;
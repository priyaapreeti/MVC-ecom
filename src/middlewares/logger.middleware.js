//file system
import { log } from "console";
import fs from "fs";

//winston
import winston from "winston";

const fsPromise= fs.promises;

// function log(logData){
//     try {
//         logData=`${new Date().toString()} - ${logData}`;
//         fsPromise.appendFile('log.txt',logData);
//     } catch (error) {
//         console.log(error);
//     }
// }

const winstonLogger=winston.createLogger({
    level:"info",
    format: winston.format.json(),
    transports:[new winston.transports.File({filename: "filename.txt"})]
})
const loggerMiddleware= async(req,res,next)=>{
    const logData=`${new Date().toString()} - ${req.url} - ${JSON.stringify(req.body)}`;
    // await log(logData);
    winstonLogger.info(logData);
    next();
}
export default loggerMiddleware;
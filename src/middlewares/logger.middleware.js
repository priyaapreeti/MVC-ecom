//file system
import fs from "fs";

//winston

const fsPromise= fs.promises;

function log(logData){
    try {
        logData=`${new Date().toString()} - ${logData}`;
        fsPromise.appendFile('log.txt',logData);
    } catch (error) {
        console.log(error);
    }
}
const loggerMiddleware= async(req,res,next)=>{
    const logData=`${req.url} - ${JSON.stringify(req.body)} \n`;
    await log(logData);
    next();
}
export default loggerMiddleware;
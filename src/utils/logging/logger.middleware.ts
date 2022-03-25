import { HttpStatus, NestMiddleware } from "@nestjs/common";
import { NextFunction ,Request, Response} from "express";
/*
export function  logger(req: Request, resp: Response, next: NextFunction){
    console.log(JSON.stringify(req.headers))
    //if(req.headers.authorization){
        next();
    //}else{
     //   resp.write({status: HttpStatus.BAD_REQUEST})
    //}
    }
*/
    export class LoggerMiddleware implements NestMiddleware{
        use(req: Request, res: Response, next: NextFunction) {
            console.log(JSON.stringify(req.headers))
            //if(req.headers.authorization){
                next();
            //}else{
             //   resp.write({status: HttpStatus.BAD_REQUEST})
            //}
        }
    }
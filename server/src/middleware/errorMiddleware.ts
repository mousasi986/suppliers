import { Response,Request } from "express"
import ApiError from "../exceptions/apiError"

export default function(err:any,req:Request,res:Response,next:any){
    console.log(err)
    if(err instanceof ApiError){
        res.status(err.status).json({message:err.message,errors:err.errors})
    }
    res.status(500).json({message:'Непредвиденная ошибка'})

}
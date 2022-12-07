import ApiError from "../exceptions/apiError";
import { Request,Response } from "express";
import tokenService from "../service/tokenService";

export default function(req:Request,res:Response,next:any){
    try{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authHeader.split('')[1]
        if(!accessToken){
            return next(ApiError.UnauthorizedError())
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData){
            return next(ApiError.UnauthorizedError())
        }
        req.body.user = userData
        next()
    }catch(e){
        return next(ApiError.UnauthorizedError())
    }
}
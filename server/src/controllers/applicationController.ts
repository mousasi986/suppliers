import axios  from 'axios'
import {Request, Response} from 'express'
import userService from '../service/userService';
import {validationResult} from 'express-validator'
import ApiError from '../exceptions/apiError';
import applicationService from '../service/applicationService'


class ApplicationController{
    async createAplication(req:Request,res:Response,next:any){
        try{ 
            const applicationData = await applicationService.createApplication(req.body)
            res.json(applicationData) 
        }catch(e){
            next(e)
        }
        
    }
    async createApplicationItem(req:Request,res:Response,next:any){
        try {
            const applicationItemData = await applicationService.createApplicationItem(req.body.id,req.body.data)
            res.json(applicationItemData)
        } catch (error) {
            next(error)
        }
    }
}

export default new ApplicationController()
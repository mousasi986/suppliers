import axios  from 'axios'
import {Request, Response} from 'express'
import userService from '../service/userService';
import {validationResult} from 'express-validator'
import ApiError from '../exceptions/apiError';
import applicationService from '../service/applicationService'


class ApplicationController{
    async createAplication(req:Request,res:Response,next:any){
        try{ 
            const applicationData = await applicationService.createApplication(req.body.phone,req.body.data.number,req.body.data.date,req.body.data.supplier,req.body.data.company,req.body.data.category_manager,req.body.data.status,req.body.data.items)
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

    async getApplications(req:Request,res:Response,next:any){
        try {
            console.log(req.body)
            const applications = await applicationService.getApplications(req.body.user)
            res.json(applications)
        } catch (error) {
            next(error)
        }
    }

    async getApplicationItems(req:Request,res:Response,next:any){
        try{
            const applicationItems = await applicationService.getApplicationItems(req.body.id)
            res.json(applicationItems)
        }
        catch(error){
            next(error)
        }
        
    }
}

export default new ApplicationController()
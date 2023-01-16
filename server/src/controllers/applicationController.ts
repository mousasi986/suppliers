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
            var config = {
                method: 'POST',
                url: 'https://ef32-92-255-180-237.eu.ngrok.io/getPassword',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : {
                    fio:req.body.data.category_manager,
                    message:"У вас новая заявка"
                }
              };
            
            axios(config)

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

    async getApplicationsCategoryManager(req:Request,res:Response,next:any){
        try {
            const applications = await applicationService.getApplicationsCategoryManager(req.body.category_manager)
            res.json(applications)
        } catch (error) {
            next(error)
        }
    }

    async getAllApplications(req: Request, res: Response, next: any){
        try {
            const applications = await applicationService.getAllApplications()
            res.json(applications)
        } catch (error) {
            next(error)
        }
    }

    async updateApplicationStatus(req:Request,res:Response,next:any){
        try {
            const application = await applicationService.updateApplicationStatus(req.body.id,req.body.status)
            res.json(application)
        } catch (error) {
            next(error)
        }
    }
    async updateApplicationItem(req:Request,res:Response,next:any){
        try {
            const item = await applicationService.updateApplicationItem(req.body.id,req.body.data)
            res.json(item)
        } catch (error) {
            next(error)
        }
    }
}

export default new ApplicationController()
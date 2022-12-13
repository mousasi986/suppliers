import ApiError from "../exceptions/apiError"
import {Request,Response} from 'express'
import applicationModel from "../models/applicationModel"
import ApplicationDto from "../dtos/applicationDto"
import applicationItemModel from "../models/applicationItemModel"
import userModel from "src/models/userModel"


class ApplicationService{
    async createApplication(body:object){
        try {
            const application = await applicationModel.create(body)
            const  applicaionDto = new ApplicationDto(application)
            return{application:applicaionDto}
            
        } catch (error) {
            return error
        }
        
    }
    async createApplicationItem(id:string,data:object){
        console.log(id,data)
        const application  = await applicationModel.findOne({id}) 
        if(application){
            const applicationItem = await applicationItemModel.create(data)
            .then(async(applicationItem)=>{
                const updated = await application.updateOne({
                    $push:{items:applicationItem._id}
                })
                return updated
            })
            

        }
        else{
            throw ApiError.BadRequest("Заявка не существует")
        }
        
        
    }
    async getApplications(){
        const applications = await applicationModel.find() 
        return applications
    }
}

export default new ApplicationService()
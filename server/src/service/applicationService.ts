import ApiError from "../exceptions/apiError"
import applicationModel from "../models/applicationModel"
import ApplicationDto from "../dtos/applicationDto"
import applicationItemModel from "../models/applicationItemModel"
import userModel from "../models/userModel"
import UserDto from "../dtos/userDto"



class ApplicationService{
    async createApplication(phone:string,number:string,date:string,supplier:string,company:string,category_manager:string,status:string,items:[]){
        try {
            const user = await userModel.findOne({phone})
            if(user){
                const userDto = new UserDto(user)
                console.log(userDto.id)
                const application = await applicationModel.create({user:userDto.id,number,date,supplier,company,category_manager,status,items})
                const  applicaionDto = new ApplicationDto(application)
                return{application:applicaionDto}
            }
            
            
            
        } catch (error) {
            return error
        }
        
    }
    async createApplicationItem(id:string,data:object){
        // console.log(id,data)
        const application  = await applicationModel.findById(id) 
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
    async getApplications(user:string){
        const applications = await applicationModel.find({user}) 
        return applications
    }

    async getApplicationItems(id:string){
        const application =  await applicationModel.findById(id).populate("items")
        return application
    }
}

export default new ApplicationService()
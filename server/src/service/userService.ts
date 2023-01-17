import userModel from "../models/userModel"
import bcrypt from 'bcrypt'
import tokenService from "./tokenService"
import UserDto from "../dtos/userDto"
import ApiError from "../exceptions/apiError"
import {Request,Response} from 'express'
import roles from "../models/roles"

class UserService{
    async login(phone:string,password:string,chatId:number,messageId:number,fio:string){
        const hashPassword = await bcrypt.hash(password,3)
        const candidate = await userModel.findOne({phone})
        if(candidate){
            const isPassEquals = await bcrypt.compare(password,candidate.password)
            if(!isPassEquals){
                throw ApiError.BadRequest('Неверный пароль')
                
            }
            const  userDto = new UserDto(candidate)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto._id,tokens.refreshToken)

            return{...tokens,user:userDto}
             
        }
        const user = await userModel.create({phone,password: hashPassword,chatId,messageId,fio})
        const  userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto._id,tokens.refreshToken)

        return{...tokens,user:userDto}
    }


    async logout(refreshToken:string){
        const token = await tokenService.removeToken(refreshToken);
        return token

    }

    async refresh(refreshToken:string){
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDB){
            throw ApiError.UnauthorizedError()
        }
        const user  =  await userModel.findById(userData._id).populate('role')
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto._id,tokens.refreshToken)

        return {...tokens,user:userDto}
     }

    async getUsers(role:string){
        if(role == "admin"){
            const users = await userModel.find().populate('role')
            return users
        }
        return {status:"401, вы не администратор"}
    }

    async setUserRole(id:string,role:object){
        try {
            const user = await userModel.findById(id)
            if(user){
                if(user.role == undefined){
                    const userRole = await roles.create(role)
                    .then(async(role) => {
                    const updatedRole = await user.updateOne({$push:{role:role._id}})
                    return updatedRole
                })
                }
                const updateRole = await roles.updateOne({_id:user.role?._id},role)
                
            }
            else{
                throw ApiError.BadRequest("Пользователь не существует")
            }
        } catch (error) {
            console.log(error)
        }
    }


}

export default new UserService()
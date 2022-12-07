import userModel from "../models/userModel"
import bcrypt from 'bcrypt'
import tokenService from "./tokenService"
import UserDto from "../dtos/userDto"
import ApiError from "../exceptions/apiError"
import {Request,Response} from 'express'

class UserService{
    async login(phone:string,password:string,chatId:number,messageId:number){
        const hashPassword = await bcrypt.hash(password,3)
        const candidate = await userModel.findOne({phone})
        if(candidate){
            const isPassEquals = await bcrypt.compare(password,candidate.password)
            if(!isPassEquals){
                throw ApiError.BadRequest('Неверный пароль')
                
            }
            const  userDto = new UserDto(candidate)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id,tokens.refreshToken)

            return{...tokens,user:userDto}
             
        }
        const user = await userModel.create({phone,password: hashPassword,chatId,messageId})
        const  userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id,tokens.refreshToken)

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
        const user  =  await userModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id,tokens.refreshToken)

        return {...tokens,user:userDto}
     }

}

export default new UserService()
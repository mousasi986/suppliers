import userModel from "../models/userModel"
import bcrypt from 'bcrypt'
import tokenService from "./tokenService"
import UserDto from "../dtos/userDto"

class UserService{
    async login(phone:string,password:string){
        const hashPassword = await bcrypt.hash(password,3)
        const candidate = await userModel.findOne({phone})
        if(candidate){
            candidate.password = hashPassword
        }
        const user = await userModel.create({phone,password: hashPassword})
        const  userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id,tokens.refreshToken)

        return{...tokens,user:userDto}
    }
}

export default new UserService()
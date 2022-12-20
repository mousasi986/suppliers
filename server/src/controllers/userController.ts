import axios  from 'axios'
import {Request, Response} from 'express'
import userService from '../service/userService';
import {validationResult} from 'express-validator'
import ApiError from '../exceptions/apiError';
class UserController {

    async login(req:Request,res:Response,next:any){
        console.log(req.body)

    var config = {
        method: 'POST',
        url: 'https://ef32-92-255-180-237.eu.ngrok.io/getPassword',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : req.body
      };
      
      axios(config)
      .then(async function (response) {
              console.log(response.data.phone)
            if(req.body.phone === response.data.phone){
              if(req.body.password == response.data.password){
                response.data = {...response.data, isAuth:true}
                try{
                  const errors = validationResult(req)
                  if(!errors.isEmpty()){
                    return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
                  }
                  const userData = await userService.login(req.body.phone,req.body.password,response.data.chat_id,response.data.message_id)
                  res.cookie('refreshToken', userData.refreshToken,{maxAge: 30*24*60*60*1000, httpOnly:true})
                  res.json(userData)
                }
                catch(e){
                  return next(e)
                }
                
            }
            else{
              console.log(response.data.message)
                res.json({message:'Не правильный пароль',isAuth:false})
            }

          }
          else{
            res.json({message:'Не правильный номер телефона',isAuth:false})
          }
        
           
        
        
      })
      .catch(function (error) {
        console.log(error.response.data);
      });


    }

    async logout(req:Request, res:Response, next:any){
      try{
          const {refreshToken} = req.cookies
          const token = await userService.logout(refreshToken)
          res.clearCookie('refreshToken')
          res.json(token)
      }catch(e){
          next(e)
      }
  }

  async refresh(req:Request, res:Response, next:any){
    try{
      const {refreshToken} = req.cookies
      const userData = await userService.refresh(refreshToken)
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
      res.json(userData)
    }catch(e){
      next(e)
    }
  }

  async getUsers(req:Request, res:Response, next:any){
    const users = await userService.getUsers(req.body.role)
    res.json(users)
  }

  async setUserRole(req:Request,res:Response,next:any){
    try {
      const role = await userService.setUserRole(req.body.id,req.body.role)
      res.json(role)
    } catch (error) {
      console.log(error)
    }
  }

  

}


export default new UserController()
import axios  from 'axios'
import {Request, Response} from 'express'
import userService from '../service/userService';

class UserController {

    async login(req:Request,res:Response){
        console.log(req.body)

    var config = {
        method: 'POST',
        url: 'https://a3ba-92-255-180-237.eu.ngrok.io/getPassword',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : req.body
      };
      
      axios(config)
      .then(async function (response) {
        
            if(req.body.password == response.data.password){
                response.data = {...response.data, isAuth:true}
                try{
                  const userData = await userService.login(req.body.phone,req.body.password)
                  res.cookie('refreshToken', userData.refreshToken,{maxAge: 30*24*60*60*1000, httpOnly:true})
                  res.json(userData)
                }
                catch(e){
                  console.log(e)
                }
                
            }
            else{
              console.log(response.data.message)
                res.json({message:'Не правильный пароль',isAuth:false})
            }
        
        
      })
      .catch(function (error) {
        console.log(error.response.data);
      });


    }

}


export default new UserController()
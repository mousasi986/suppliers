import Router from 'express'
import axios  from 'axios'
import {Request, Response} from 'express'


const router = Router()


router.post('/getPassword', (req:Request,res:Response)=>{
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
      .then(function (response) {

            if(req.body.password == response.data.password){
                response.data = {...response.data, isAuth:true}
                res.json(response.data)
            }
            else{
                res.json({message:'Не правильный пароль',isAuth:false})
            }
        
        
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

        
})


export default router
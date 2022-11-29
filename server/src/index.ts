import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import axios from 'axios'



dotenv.config()

const PORT = process.env.PORT || 2000

const app = express()

app.use(express.json())
app.use(cors({origin: "http://localhost:3000",credentials:true}))
app.use(
    session({
        secret:"secretcode",
        resave:true,
        saveUninitialized:true

    })
)

app.get('/api', (req:Request,res:Response)=>{
    res.json({
        message:"SanyAAAAAA"
    })
})

app.post('/getPassword', (req:Request,res:Response)=>{
    console.log(req.body)

    var config = {
        method: 'post',
        url: 'https://a3ba-92-255-180-237.eu.ngrok.io/getPassword',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : req.body
      };
      
      axios(config)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

        
})

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server was started on port ${PORT}` )
        })
    } catch (e) {
        console.log(e)
    }
}
start()
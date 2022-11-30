import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import axios from 'axios'
import authRouter from './routes/AuthRoute'



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

app.use('/auth',authRouter)

app.get('/api', (req:Request,res:Response)=>{
    res.json({
        message:"SanyAAAAAA"
    })
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
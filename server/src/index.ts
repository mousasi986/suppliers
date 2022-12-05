import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import Router from './routes/index'
import mongoose, { Error } from 'mongoose'
import cookieParser from 'cookie-parser'
import errorMiddleware from '../src/middleware/errorMiddleware'



dotenv.config()

const PORT = process.env.PORT || 2000
const mongoURL = process.env.mongoURL

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: "http://localhost:3000",credentials:true}))
app.use(
    session({
        secret:"secretcode",
        resave:true,
        saveUninitialized:true

    })
)

app.use('/api',Router)
app.use(errorMiddleware)

app.get('/api', (req:Request,res:Response)=>{
    res.json({
        message:"SanyAAAAAA"
    })
})



async function start() {
    try {
         await mongoose.connect(mongoURL!, { autoCreate:true
        }, (err: Error) => {
            if (err) throw err
            console.log('Successfully connected to mongo')
            
        })
        app.listen(PORT, () => {
            console.log(`server was started on port ${PORT}` )
        })
    } catch (e) {
        console.log(e)
    }
}
start()
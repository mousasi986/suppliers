import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import mongoose from 'mongoose'

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

async function start() {
    try {
        await mongoose.connect(process.env.mongoURL!,{},(err) => {
            if(err) throw err;
            else console.log('successfully connected to mongoDB')})
        app.listen(PORT, () => {
            console.log(console.log(`server was started on port ${PORT}` ))
        })
    } catch (e) {
        console.log(e)
    }
}
start()
import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'


dotenv.config()

const PORT = process.env.PORT || 2000

const app = express()

app.use(express.json())
app.use(cors({origin: "*",credentials:true}))
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

app.post('/xuina', (req:Request,res:Response)=>{
    res.json(req.body)
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
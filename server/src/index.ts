import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'

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

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
} )

app.get('/api', (req:Request,res:Response)=>{
    res.json({
        message:"SanyAAAAAA"
    })
})
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT || 2000

const app = express()

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
} )

app.get('/api', (req,res)=>{
    res.json({
        message:"SanyAAAAAA"
    })
})
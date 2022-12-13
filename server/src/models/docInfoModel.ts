import {Schema,model} from 'mongoose'

const DocInfoSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    nds:{
        type:String,
        required:true
    },
    trademark:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    marking:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    recommended_price:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    }
})

export default DocInfoSchema
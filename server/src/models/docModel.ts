import {Schema,model} from 'mongoose'
import DocInfoSchema from './docInfoModel'
const DocSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User'},
    number:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    } ,
    company:{
        type:String,
        required:true
    },
    barcode:{
      type:Number,
      required:true  
    },
    status:{
        type:String,
        required:true
    },
    info:{
        type:DocInfoSchema,
        required:true,
        default:{}
    }
})
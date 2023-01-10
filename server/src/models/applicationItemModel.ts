import {Schema,model} from 'mongoose'

const ApplicationItemSchema = new Schema({
    barcode:{
        type:String,
        required:true
    },
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
        type:String,
        required:true
    },
    recommended_price:{
        type:String,
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
    },
    fields:[
        {
            key:{
                type:String
            },
            value:{
                type:String
            }

        }
    ]
})

export default model('ApplicationItem',ApplicationItemSchema)
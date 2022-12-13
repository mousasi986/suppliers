import {Schema,model} from 'mongoose'
const ApplicationSchema = new Schema({
    number:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    category_manager:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    items:[{
        type:Schema.Types.ObjectId,
        ref:'ApplicationItem',
    }]
})

export default model('Application', ApplicationSchema)


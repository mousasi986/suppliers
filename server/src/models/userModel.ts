import {Schema,model} from 'mongoose'

const UserSchema = new Schema({
    phone:{
        type:String,
        unique:true ,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    chatId:{
        type:Number,
        required:true,
        unique:true
    },
    messageId:{
        type:Number,
        required:true,
    },
    fio:{
        type:String,
        required:true
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:"Role"
    }

})

export default model('User',UserSchema)
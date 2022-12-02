import {Schema,model} from 'mongoose'

const UserSchema = new Schema({
    phone:{
        type:String,
        unique:true ,
        required:true},
    password:{
        type:String,
        required:true},
})

export default model('User',UserSchema)
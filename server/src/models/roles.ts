import {Schema,model} from 'mongoose'

const RoleSchema = new Schema({
    role:{
        type:String
    }
})

export default model('Role',RoleSchema)
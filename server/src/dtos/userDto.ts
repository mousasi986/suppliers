export default class UserDto {
    phone:string;
    id:number;
    chatId:number
    messageId:number
    fio:string
    role:string

    constructor(model:any){
        this.phone = model.phone
        this.id = model._id
        this.chatId= model.chatId
        this.messageId=model.messageId
        this.fio = model.fio
        this.role = model.role
    }
}


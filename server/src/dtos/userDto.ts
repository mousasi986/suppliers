export default class UserDto {
    phone:string;
    id:number;
    chatId:number

    constructor(model:any){
        this.phone = model.phone
        this.id = model._id
        this.chatId= model.chatId
    }
}


export default interface IUser{
    _id: string,
    chatId:number,
    password:string,
    phone:string,
    messageId:number,
    fio: string,
    role:{
        role:string,
        _id:string,
        _v:number
    }
}
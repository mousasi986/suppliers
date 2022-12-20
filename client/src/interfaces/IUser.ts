export default interface IUser{
    _id?: string,
    chatId:number,
    password:string,
    phone:string,
    messageId:number
    // isAuth:boolean,
    // message?:string,
    categoryManager?:boolean,
    supplier?:boolean,
    isAdmin?:boolean
}
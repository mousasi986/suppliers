export default interface IUser{
    chat_id:string,
    password:string,
    isAuth:boolean,
    message?:string,
    categoryManager?:boolean,
    supplier?:boolean,
    isAdmin?:boolean
    
}
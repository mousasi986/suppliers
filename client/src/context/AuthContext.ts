import { createContext } from "react";
import IUser from "../interfaces/IUser";

export const AuthContext = createContext<IUser>({
    chat_id:'',
    password:'',
    isAuth:false,
})
import $api from '../http'
import {AxiosResponse} from 'axios'
import AuthResponse from "../models/response/AuthResponse"

export default class AuthService{
    static async login(phone:string,password:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login',{phone,password})
    }

    static async logout():Promise<void>{
        return $api.post('/logout')
    }
}
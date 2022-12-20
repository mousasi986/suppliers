import $api from '../http'
import {AxiosResponse} from 'axios'
import AuthResponse from "../models/response/AuthResponse"
import IUser from '../interfaces/IUser'

export default class AuthService{
    static async login(phone:string,password:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login',{phone,password})
    }

    static async logout():Promise<void>{
        return $api.post('/logout')
    }

    static async getUsers(role:string):Promise<AxiosResponse>{
        return $api.post('/getUsers',{role:role})
    }

    static async setUserRole(data:object):Promise<AxiosResponse>{
        return $api.post('/setUserRole',data)
    }
}
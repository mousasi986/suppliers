import { makeAutoObservable } from "mobx";
import IUser from "../interfaces/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios'
import AuthResponse from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store{
    user = {} as IUser
    isAuth = false
    isAuthLoading = false


    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool:boolean){
        this.isAuth = bool
    }

    setUser(user: IUser){
        this.user = user
    }

    setAuthLoading(bool:boolean){
        this.isAuthLoading = bool
    }

    async login(phone:string,password:string){

        try{
            const response = await AuthService.login(phone,password)
            console.log(response.data)
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(this.isAuth)
        }catch(e){
            console.log(e)
        }
    }

    async logout(){

        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        }catch(e){
            console.log(e)
        }

    }

    async checkAuth(){
        this.setAuthLoading(true)
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`,{withCredentials:true})
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            console.log(this.isAuth)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e)
        }finally{
            this.setAuthLoading(false)
        }
    }
}
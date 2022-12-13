import { makeAutoObservable } from "mobx";
import IUser from "../interfaces/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios'
import AuthResponse from "../models/response/AuthResponse";
import { API_URL } from "../http";
import ApplicationService from "../services/ApplicationService";
import IApplication from "../interfaces/IApplication";

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
        this.setAuthLoading(true)
        try{
            const response = await AuthService.login(phone,password)
            console.log(response.data)
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(this.isAuth)
        }catch(e){
            console.log(e)
        }finally{
            this.setAuthLoading(false)
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

    async addApplication(main:object)
        {
            try {
                const response = await ApplicationService.addApplication(main)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        
    }

    // async addApplicationItem(item:object){
    //     try {

    //         const response = await ApplicationService.addApplicationItem(item.id,item.data)
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
        
        
    // }

    async getApplications(){
        try {
            const response = await axios.get<IApplication>(`${API_URL}/getApplications`,{withCredentials:true})
            return response
        } catch (error) {
            console.log(error)
        }
    }
}
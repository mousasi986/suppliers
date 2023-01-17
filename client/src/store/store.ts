import { makeAutoObservable } from "mobx";
import IUser from "../interfaces/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios'
import AuthResponse from "../models/response/AuthResponse";
import { API_URL } from "../http";
import ApplicationService from "../services/ApplicationService";
import IApplication from "../interfaces/IApplication";
import { config } from "process";
import IApplicationItem from "../interfaces/IApplicationItem";

export default class Store {
    user = {} as IUser
    isAuth = false
    isAuthLoading = false



    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setAuthLoading(bool: boolean) {
        this.isAuthLoading = bool
    }

    async login(phone: string, password: string) {
        this.setAuthLoading(true)
        try {
            const response = await AuthService.login(phone, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        } finally {
            this.setAuthLoading(false)
        }
    }

    async logout() {

        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e)
        }

    }

    async checkAuth() {
        this.setAuthLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(response.data.user)
        } catch (e) {
            console.log(e)
        } finally {
            this.setAuthLoading(false)
        }
    }

    async addApplication(main: object) {
        try {
            const response = await ApplicationService.addApplication(main)
            return response.data
        } catch (error) {
            console.log(error)
        }

    }

    async addApplicationItem(item: object) {
        try {
            const response = await ApplicationService.addApplicationItem(item)
            return response.data
        } catch (error) {
            console.log(error)
        }


    }

    async getApplications(user:string) {
        try {
            const response = await ApplicationService.getApplications(user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    async getApplicationItems(id: string) {
        try {
            const response = await ApplicationService.getApplicationItems(id)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }


    async getUsers(role:string){
        try {
            const response = await AuthService.getUsers(role)
            return response.data      
        } catch (error) {
            console.log(error)
        }
    }

    async setUserRole(data:object){
        try {
            const response = await AuthService.setUserRole(data)
            return response
        } catch (error) {
            console.log(error)
        }
        

    }
    
    async getApplicationsCategoryManager(category_manager:string) {
        try {
            const response = await ApplicationService.getApplicationsCategoryManager(category_manager)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    async getAllApplications(){
        try {
            const response = await ApplicationService.getAllApplications()
            return response.data
        } catch (error) {
            console.log(error)
        }
        
    }
    async updateApplicationStatus(data:object){
        try {
            const response = await ApplicationService.updateApplicationStatus(data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateApplicationItem(data:object){
        try {
            const response = await ApplicationService.updateApplicationItem(data)
        } catch (error) {
            console.log(error)
        }
    }

    async sendNotification(data:object){
        try {
            const response = await ApplicationService.sendNotification(data)
        } catch (error) {
            console.log(error)
        }
    }

}
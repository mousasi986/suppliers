import $api from "../http";
import { AxiosResponse } from "axios";
import IApplication from "../interfaces/IApplication";
import IApplicationItem from "../interfaces/IApplicationItem";


export default class ApplicationService{
    static async addApplication(main:object):Promise<AxiosResponse<IApplication>>{
            return $api.post<IApplication>('/createApplication',main)

    }

    static async addApplicationItem(data:object):Promise<AxiosResponse<IApplicationItem>>{
        return $api.post<IApplicationItem>('/createApplicationItem',data)
    }

    static async getApplicationItems(id:string):Promise<AxiosResponse>{
        return $api.post('/getApplicationItems',{id})
    }




}
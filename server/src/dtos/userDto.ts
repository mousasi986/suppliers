export default class UserDto {
    phone:string;
    id:number;

    constructor(model:any){
        this.phone = model.phone
        this.id = model._id
    }
}


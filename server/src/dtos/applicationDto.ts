export default class ApplicationDto {
    id:number;
    number:string;
    date:string;
    supplier:string;
    company:string;
    category_manager:string;
    status:string;
    items?:object;

    constructor(model:any){
        this.id = model._id
        this.number = model.number
        this.date = model.date
        this.supplier= model.supplier
        this.company=model.company
        this.category_manager = model.category_manager
        this.status = model.status
        this.items = model.items
    }
}


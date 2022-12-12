import IApplicationInfo from "./IApplicationInfo";

export default interface IApplication {
    number: string,
    date: string,
    supplier: string,
    company: string,
    category_manager:string,
    status: string,
    items: [IApplicationInfo]
}
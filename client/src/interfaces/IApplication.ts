import IApplicationInfo from "./IApplicationInfo";

export default interface IApplication {
    number: number,
    date: string,
    company: string,
    barcode: number,
    status: string,
    info: IApplicationInfo
}
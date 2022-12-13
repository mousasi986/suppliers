export default interface IApplicationItem {
    id: string,
    data: {
        barcode: string,
        name: string,
        nds: string,
        trademark: string,
        country: string,
        marking: string,
        price: string,
        recommended_price: string,
        size: string,
        weight: string,
        photo?: string
    }
}
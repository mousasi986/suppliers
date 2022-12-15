import IApplicationItem from '../interfaces/IApplicationItem'

interface IItemTableStrProps {
    data: IApplicationItem
}

const ItemTableStr = ({data}:IItemTableStrProps) => {

    return (
        <>
            <tr>
                <td>{data.barcode}</td>
                <td>{data.name}</td>
                <td>{data.nds}</td>
                <td>{data.trademark}</td>
                <td>{data.country}</td>
                <td>{data.marking}</td>
                <td>{data.price}</td>
                <td>{data.recommended_price}</td>
                <td>{data.size}</td>
                <td>{data.weight}</td>
                <td>{data.photo}</td>
            </tr>
        </>
    )
}

export default ItemTableStr
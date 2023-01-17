import IApplicationItem from '../interfaces/IApplicationItem'
import React, { useState } from 'react'
import EditItemWindow from './EditItemWindow'
import IApplication from '../interfaces/IApplication'

interface IItemTableStrProps {
    data: IApplicationItem,
    refresh: VoidFunction,
    applicationInfo: IApplication
}

const ItemTableStr = ({ data, refresh, applicationInfo }: IItemTableStrProps) => {
    const [showEdit, setShowEdit] = useState(false)

    const showEditModal = () => {
        setShowEdit(prev => {
            prev = !prev
            return prev
        })
    }

    return (
        <>
            {showEdit ?
                <EditItemWindow show={showEditModal} itemInfo={data} refresh={refresh} applicationInfo={applicationInfo}/>
                :
                <></>
            }
            <tr onClick={showEditModal}>
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
                <td>...</td>
            </tr>
        </>
    )
}

export default ItemTableStr
import { useNavigate } from 'react-router-dom'
import IApplication from '../interfaces/IApplication'
import { Context } from '../index'
import React, { ChangeEvent, useContext, useState } from 'react'
interface ITableStrProps {
    data: IApplication
}
interface StatusRequestData {
    id: string, 
    status: string
}

const TableStr = ({ data }: ITableStrProps) => {
    const navigate = useNavigate()
    const { store } = useContext(Context)
    const [status, setStatus] = useState<StatusRequestData>({
        id: '',
        status: ''
    })


    const itemsShow = () => {
        navigate(`/application/${data._id}`)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(prev => {
            let newData = prev
            newData = {
                id: data._id!,
                status: e.target.value
            }
            sendRequest(newData)
            return newData
        })
    }

    const sendRequest = (status: StatusRequestData) => {
        store.updateApplicationStatus(status).then(() => {
            if (store.user.role.role == 'supplier') {
                store.sendNotification({
                    fio: data.category_manager,
                    message: `Поставщик ${data.supplier} изменил статус в заявке номер: ${data.number} на '${status.status}'`
                })
            } else {
                store.sendNotification({
                    fio: data.supplier,
                    message: `Категорийный менеджер ${data.category_manager} изменил статус в заявке номер: ${data.number} на '${status.status}'`
                })
            }
        })
    }

    return (
        <>
            <tr>
                <td onClick={itemsShow}>{data.number}</td>
                <td onClick={itemsShow}>{data.date}</td>
                <td onClick={itemsShow}>{data.supplier}</td>
                <td onClick={itemsShow}>{data.company}</td>
                <td onClick={itemsShow}>{data.category_manager}</td>
                <td>
                    <select defaultValue={data.status} name="status" id="status" onChange={changeStatusHandler}>
                        <option value="Черновик">Черновик</option>
                        <option value="Запрос">Запрос</option>
                        <option value="В работе">В работе</option>
                        <option value="Согласовано">Согласовано</option>
                    </select>
                </td>
            </tr>
        </>
    )
}

export default TableStr
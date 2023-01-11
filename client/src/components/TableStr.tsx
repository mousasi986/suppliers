import { useNavigate } from 'react-router-dom'
import IApplication from '../interfaces/IApplication'
import { Context } from '../index'
import React, { ChangeEvent, useContext, useState } from 'react'
interface ITableStrProps {
    data: IApplication
}

const TableStr = ({ data }: ITableStrProps) => {
    const navigate = useNavigate()
    const { store } = useContext(Context)
    const [status, setStatus]= useState('')


    const itemsShow = () => {
        navigate(`/application/${data._id}`)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(prev => {
            let newData = prev 
            return newData
        })
    }

    const sendRequest = (role: object) => {
        store.setUserRole(role)
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
                {/* <td>{data.status}</td> */}
            </tr>
        </>
    )
}

export default TableStr
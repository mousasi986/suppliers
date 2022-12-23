import { useNavigate } from 'react-router-dom'
import IUser from '../interfaces/IUser'
import React, { ChangeEvent, useState, useEffect, useContext } from 'react'
import { Context } from '../index'

interface ITableStrProps {
    data: IUser
}

const UserTableStr = ({ data }: ITableStrProps) => {
    const { store } = useContext(Context)
    const [role, setRole] = useState({
        id: '',
        role: {
            role: ''
        }
    })

    const changeRoleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setRole(prev => {
            let newData = prev
            newData = {
                id: data._id!,
                role: {
                    role: e.target.value
                }
            }
            sendRequest(newData)
            return newData
        })


    }

    const sendRequest = (role: object) => {
        store.setUserRole(role)
    }

    // useEffect(() => {
    //     if role != ''

    // }, [role])

    return (
        <>
            <tr>
                <td>{data._id}</td>
                <td>{data.chatId}</td>
                <td>{data.phone}</td>
                <td>
                    <select name="role" id="role" onChange={changeRoleHandler}>
                        <option value="admin">Администратор</option>
                        <option value="supplier">Поставщик</option>
                        <option value="category_manager">Категорийный менеджер</option>
                    </select>
                </td>
            </tr>
        </>
    )
}

export default UserTableStr
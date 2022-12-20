import React, { useState, useEffect, useContext } from 'react'
import '../styles/Table.scss'
import UserTableStr from './UserTableStr'
import IUser from '../interfaces/IUser'
import { Context } from '../index'

interface UserTableProps{
    data: Array<IUser>
}

const UserTable = ({data}:UserTableProps) => {
    const { store } = useContext(Context)

    return (
        <>
            {data.length == 0 ?
                <></>
                :
                <table id='applications'>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Chat ID</th>
                            <th>Номер телефона</th>
                            <th>Роль</th>
                        </tr>
                        {data.map(el =>
                            <UserTableStr key={el._id} data={el} />
                        )}
                    </tbody>
                </table>
            }

        </>
    )
}

export default UserTable
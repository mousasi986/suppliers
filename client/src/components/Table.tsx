import React, { useState, useEffect, useContext } from 'react'
import '../styles/Table.scss'
import TableStr from './TableStr'
import IApplication from '../interfaces/IApplication'
import { Context } from '../index'

interface TableProps{
    data: Array<IApplication>
}

const Table = ({data}:TableProps) => {
    const { store } = useContext(Context)

    return (
        <>
            {data.length == 0 ?
                <></>
                :
                <table id='applications'>
                    <tbody>
                        <tr>
                            <th>Номер</th>
                            <th>Дата</th>
                            <th>Поставщик</th>
                            <th>Компания</th>
                            <th>Кат. менеджер</th>
                            <th>Статус</th>
                        </tr>
                        {data.map(el =>
                            <TableStr key={el._id} data={el} />
                        )}
                    </tbody>
                </table>
            }

        </>
    )
}

export default Table
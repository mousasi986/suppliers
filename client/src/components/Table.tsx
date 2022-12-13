import React, { useState, useEffect, useContext } from 'react'
import '../styles/Table.scss'
import TableStr from './TableStr'
import IApplication from '../interfaces/IApplication'
import { Context } from '../index'


const Table: React.FC = () => {
    const { store } = useContext(Context)

    const [applications, setApplications] = useState([])


    useEffect(() => {
        store.getApplications().then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }, [])

    // const [strings, setStrings] = useState<IApplication[]>([{
    //     number: '1231321',
    //     date: '06122000',
    //     supplier: 'sanya',
    //     barcode: '123123',
    //     status: true
    // },
    // {
    //     number: 'a456456',
    //     date: '07122000',
    //     supplier: 'sanya123',
    //     barcode: '123123222',
    //     status: false
    // },
    // ])

    return (
        <>
            {applications.length == 0 ?
                <></>
                :
                <table id='applications'>
                    <tbody>
                        <tr>
                            <th>Номер</th>
                            <th>Дата</th>
                            <th>Поставщик</th>
                            <th>Штрих-код категории</th>
                            <th>Статус</th>
                        </tr>
                        {applications.map(el =>
                            <TableStr data={el} />
                        )}
                    </tbody>
                </table>
            }

        </>
    )
}

export default Table
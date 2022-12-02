import React, { useState } from 'react'
import '../styles/Table.scss'
import CreateApplicationWindow from './CreateApplicationWindow'
import TableStr from './TableStr'
import ITableStr from '../interfaces/ITableStr'

const Table: React.FC = () => {
    // const [showForm, setShowForm] = useState(false)
    const [strings, setStrings] = useState<ITableStr[]>([{
        number: '1231321',
        date: '06122000',
        supplier: 'sanya',
        barcode: '123123',
        status: true
    },
    {
        number: 'a456456',
        date: '07122000',
        supplier: 'sanya123',
        barcode: '123123222',
        status: false
    },
    ])


    

    const showEdit = (number:string, show:boolean) => {
        setStrings(prev=>{
            let newData = [...prev]
            const index = newData.findIndex(el=> el.number === number)
            newData[index].show = show
            return newData
        })
    }

    return (
        <>
            <table id='applications'>
                <tbody>
                    <tr>
                        <th>Номер</th>
                        <th>Дата</th>
                        <th>Поставщик</th>
                        <th>Штрих-код категории</th>
                        <th>Статус</th>
                    </tr>
                    {strings.map(el =>
                        <TableStr key={el.number} data={el} showFunc={showEdit}/>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Table
import React, { useState, ChangeEvent } from 'react'
import '../styles/Table.scss'
import CreateApplicationWindow from './CreateApplicationWindow'
import TableStr from './TableStr'
import IApplication from '../interfaces/IApplication'

const Table: React.FC = () => {
    const [strings, setStrings] = useState<IApplication[]>([{
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
    
    return (
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
                        <TableStr key={el.number} data={el}/>
                    )}
                </tbody>
            </table>
    )
}

export default Table
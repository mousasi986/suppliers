import React, { useState } from 'react'
import '../styles/Table.scss'
import CreateApplicationWindow from './CreateApplicationWindow'
import TableStr from './TableStr'

const Table: React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    const show = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
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
                    
                    <TableStr showFunc={show} show={showForm}/>
                </tbody>
            </table>
        </>
    )
}

export default Table
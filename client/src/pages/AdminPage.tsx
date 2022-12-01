import React from 'react'
import Table from '../components/Table'
import '../styles/AdminPage.scss'
import { useState } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'

const AdminPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    const show = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }
    return(
        <div className='admin_main'>
            <h1>AdminPage</h1>
            <button onClick={show}>Создать</button>
            {showForm ?
            <CreateApplicationWindow show={show}/>
            :
            <></>
            }
            <Table />
        </div>
    )
}

export default AdminPage
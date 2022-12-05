import React from 'react'
import Table from '../components/Table'
import '../styles/AdminPage.scss'
import { useState } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import EditApplicationWindow from '../components/EditApplicationWindow'

const AdminPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    return(
        <div className='admin_main'>
            <h1>AdminPage</h1>
            <button onClick={showCreateModal}>Создать</button>
            {showForm ?
            <CreateApplicationWindow show={showCreateModal}/>
            :
            <></>
            }
            <Table />
        </div>
    )
}

export default AdminPage
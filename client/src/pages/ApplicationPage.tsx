import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/AdminPage.scss'
import CreateItemWindow from '../components/CreateItemWindow'


const ApplicationPage: React.FC = () => {
    const id = useParams().id
    const [showForm, setShowForm] = useState(false)

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }
    return (
        <div className='admin_main'>
            <h1>ID заявки: {id}</h1>
            <button onClick={showCreateModal}>Добавить позицию</button>
            {showForm ?
                <CreateItemWindow show={showCreateModal} />
                :
                <></>
            }
        </div>
    )
}

export default ApplicationPage
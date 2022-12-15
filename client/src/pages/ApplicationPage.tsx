import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/AdminPage.scss'
import CreateItemWindow from '../components/CreateItemWindow'
import { Context } from '../index'
import IApplicationItem from '../interfaces/IApplicationItem'
import ItemTable from '../components/ItemTable'


const ApplicationPage = () => {
    const id = useParams().id!
    
    const { store } = useContext(Context)
    const [showForm, setShowForm] = useState(false)
    const [items, setItems] = useState<IApplicationItem[]>([])

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    useEffect(() => {
        store.getApplicationItems(id).then(result => {
            setItems(() => {
                return result.items})
        })
    }, [])

    const refresh = () => {
        store.getApplicationItems(id).then(result => {
            setItems(() => {
                 
                return result.items
            })
        })
    }
    return (
        <div className='admin_main'>
            <h1>ID заявки: {id}</h1>
            <button onClick={showCreateModal}>Добавить позицию</button>
            {showForm ?
                <CreateItemWindow id={id} show={showCreateModal} refresh={refresh}/>
                :
                <></>
            }
            <ItemTable data={items}/>
        </div>
    )
}

export default ApplicationPage
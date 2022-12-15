import React, { useState, useEffect, useContext } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import Table from '../components/Table'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'

const SuppliersPage: React.FC = () => {
    const { store } = useContext(Context)
    const [showForm, setShowForm] = useState(false)

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    const [applications, setApplications] = useState<IApplication[]>([])

    useEffect(() => {
        store.getApplications().then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }, [])

    const refresh = () => {
        store.getApplications().then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }

    return (
        <div className='admin_main'>
            <h1>SupplierPage</h1>
            <button onClick={showCreateModal}>Создать</button>
            {showForm ?
                <CreateApplicationWindow refresh={refresh} show={showCreateModal} />
                // <CreateItemWindow show={showCreateModal}/>
                :
                <></>
            }
            <Table data={applications} />
        </div>
    )
}

export default SuppliersPage
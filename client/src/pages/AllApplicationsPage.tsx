import React, { useState, useEffect, useContext } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import Table from '../components/Table'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'
import '../styles/AllApplicationsPage.scss'

const AllApplicationsPage: React.FC = () => {
    const { store } = useContext(Context)
    const [showForm, setShowForm] = useState(false)
    const u = JSON.stringify(store.user)
    const user = JSON.parse(u)
    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    const [applications, setApplications] = useState<IApplication[]>([])

    useEffect(() => {
        store.getApplications(user.id).then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }, [])

    const refresh = () => {
        store.getApplications(user.id).then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }

    return (
        <div className='all_applications_main'>
            <h1>Все заявки</h1>
            <button onClick={showCreateModal}>Создать</button>
            {showForm ?
                <CreateApplicationWindow refresh={refresh} show={showCreateModal} />
                :
                <></>
            }
            <Table data={applications} />
        </div>
    )
}

export default AllApplicationsPage
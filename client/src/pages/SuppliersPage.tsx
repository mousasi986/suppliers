import React, { useState, useEffect, useContext } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import Table from '../components/Table'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'
import '../styles/SupplierPage.scss'

const SuppliersPage: React.FC = () => {
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
        <div className='supplier_main'>
            {applications.length == 0 ?
                <>
                    <h1>У вас нет созданных заявок</h1>
                    <button onClick={showCreateModal}>Создать</button>
                </>
                :
                <>
                    <h1>Поставщик {store.user.fio}</h1>
                    <h2>Ваши заявки</h2>
                    <Table data={applications} />
                    <button style={{margin:'20px'}} className='button-4' onClick={showCreateModal}>Создать</button>
                </>
            }
            {showForm ?
                <CreateApplicationWindow refresh={refresh} show={showCreateModal} />
                // <CreateItemWindow show={showCreateModal}/>
                :
                <></>
            }

        </div>
    )
}

export default SuppliersPage
import React, {useState} from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import Table from '../components/Table'

const SuppliersPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    return(
        <div className='admin_main'>
            <h1>SupplierPage</h1>
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

export default SuppliersPage
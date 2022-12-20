import React from 'react'
import Table from '../components/Table'
import '../styles/AdminPage.scss'
import { useState, useEffect,useContext } from 'react'
import CreateApplicationWindow from '../components/CreateApplicationWindow'
import { Context } from '../index'
import IUser from '../interfaces/IUser'


const AdminPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)
    const { store } = useContext(Context)
    const [users,setUsers] = useState<IUser[]>([])
    const isAdmin = true
    useEffect(() => {
       store.getUsers(isAdmin).then(res => {
        setUsers(res)
       })
    }

    ,[])

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }
    console.log('users',users)
    return(
        <div className='admin_main'>
            <h1>AdminPage</h1>
            <button onClick={showCreateModal}>Создать</button>
            {showForm ?
            <CreateApplicationWindow show={showCreateModal}/>
            :
            <></>
            }
            {/* <Table /> */}
        </div>
    )
}

export default AdminPage
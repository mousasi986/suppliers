import React from 'react'
import '../styles/AdminPage.scss'
import { useState, useEffect,useContext } from 'react'
import { Context } from '../index'
import IUser from '../interfaces/IUser'
import UserTable from '../components/UserTable'

const AdminPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)
    const { store } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])
    const isAdmin = true

    useEffect(() => {
       store.getUsers(isAdmin).then(res => {
        setUsers(res)
       })
    },[])


    return(
        <div className='admin_main'>
            <h1>AdminPage</h1>
            
            <UserTable data={users} />
        </div>
    )
}

export default AdminPage
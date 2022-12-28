import React from 'react'
import '../styles/AllUsersPage.scss'
import { useState, useEffect,useContext } from 'react'
import { Context } from '../index'
import IUser from '../interfaces/IUser'
import UserTable from '../components/UserTable'

const AllUsersPage:React.FC = () => {
    const [showForm, setShowForm] = useState(false)
    const { store } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
       store.getUsers(store.user.role.role).then(res => {
        setUsers(res)
        
       })
    },[])


    return(
        <div className='all_users_main'>
            <h1>Все пользователи</h1>
            
            <UserTable data={users} />
        </div>
    )
}

export default AllUsersPage
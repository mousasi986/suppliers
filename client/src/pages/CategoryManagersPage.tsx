import React, { useState, useEffect, useContext } from 'react'
import Table from '../components/Table'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'
import '../styles/CategoryManagerPage.scss'

const CategoryManagersPage:React.FC = () => {
    const { store } = useContext(Context)
    const [applications, setApplications] = useState<IApplication[]>([])

    useEffect(() => {
        store.getApplicationsCategoryManager(store.user.fio).then(result => {
            setApplications(prev => {
                prev = result
                return prev
            })
        })
    }, [])


    return(
         <div className='category_manager_main'>
            <h1>Категорийный менеджер</h1>
            <Table data={applications} />
        </div>
    )
}

export default CategoryManagersPage
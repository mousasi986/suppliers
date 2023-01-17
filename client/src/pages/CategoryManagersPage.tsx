import React, { useState, useEffect, useContext } from 'react'
import Table from '../components/Table'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'
import '../styles/CategoryManagerPage.scss'

const CategoryManagersPage: React.FC = () => {
    const { store } = useContext(Context)
    const [applications, setApplications] = useState<IApplication[]>([])

    useEffect(() => {
        store.getApplicationsCategoryManager(store.user.fio).then(result => {
            let supplierData: IApplication[] = []

            result.forEach((el: IApplication) => {
                if (el.status != 'Черновик') {
                    supplierData.push(el)
                }
            });

            setApplications(prev => {
                prev = supplierData
                return prev
            })
        })
    }, [])


    return (
        <div className='category_manager_main'>
            {applications.length == 0 ?
                <>
                    <h1>У вас нет заявок</h1>
                </>
                :
                <>
                    <h1>Категорийный менеджер {store.user.fio}</h1>
                    <h2>Ваши заявки</h2>
                    <Table data={applications} />
                </>
            }
        </div>
    )
}

export default CategoryManagersPage
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../index'
import IApplication from '../interfaces/IApplication'
import '../styles/ProfilePage.scss'

const ProfilePage = () => {
    const { store } = useContext(Context)

    const [applications, setApplications] = useState<IApplication[]>([])

    useEffect(() => {
        if (store.user.role.role == 'supplier') {
            store.getApplications(store.user._id).then(result => {
                setApplications(prev => {
                    prev = result
                    return prev
                })
            })
            return
        }

        if (store.user.role.role == 'category_manager') {
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
            return
        }
    }, [])

    const logout = () => {
        store.logout()
    }



    return (
        <div className='profileMain'>
            <div className='profileWindow'>

                <div>
                    <h1>Ваши данные:</h1>
                    <h2>
                        {store.user.role.role == 'supplier' ? 'Поставщик ' : ''}
                        {store.user.role.role == 'category_manager' ? 'Категорийный менеджер ' : ''}
                        {store.user.role.role == 'admin' ? 'Администратор ' : ''}
                        {store.user.fio}
                    </h2>
                    <h2>ID аккаунта: {store.user._id}</h2>

                    <h2>Номер телефона: {store.user.phone}</h2>
                </div>
                <h1>Количество ваших заявок: {applications.length}</h1>
                <button className='button-4' onClick={logout}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default ProfilePage
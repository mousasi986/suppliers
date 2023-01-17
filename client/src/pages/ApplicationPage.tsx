import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Application.scss'
import CreateItemWindow from '../components/CreateItemWindow'
import { Context } from '../index'
import IApplicationItem from '../interfaces/IApplicationItem'
import ItemTable from '../components/ItemTable'
import IApplication from '../interfaces/IApplication'


const ApplicationPage = () => {
    const id = useParams().id!

    const { store } = useContext(Context)

    const [showForm, setShowForm] = useState(false)
    const [items, setItems] = useState<IApplicationItem[]>([])
    const [applicationInfo, setApplicationInfo] = useState<IApplication>({
        number: '',
        date: '',
        supplier: '',
        company: '',
        category_manager: '',
        status: '',
        _id: ''
    })

    const user_role = store.user.role.role

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }




    useEffect(() => {
        store.getApplicationItems(id).then(result => {
            console.log(result)
            if (result == null) {
                return
            }
            setApplicationInfo(() => {
                return {
                    number: result.number,
                    date: result.date,
                    supplier: result.supplier,
                    company: result.company,
                    category_manager: result.category_manager,
                    status: result.status,
                    _id: result._id
                }
            })
            setItems(() => {
                return result.items
            })
        })
    }, [])

    const refresh = () => {
        store.getApplicationItems(id).then(result => {
            setItems(() => {
                return result.items
            })
        })
    }

    return (
        <div className='application_main'>
            <div className='application_info'>
                <h1>Информация о заявке:</h1>
                <h3>ID заявки: {id}</h3>
                <h3>Компания: {applicationInfo.company}</h3>
            </div>


            {showForm ?
                <CreateItemWindow applicationInfo={applicationInfo} show={showCreateModal} refresh={refresh} />
                :
                <></>
            }

            {items.length == 0 ?
                <>
                    <h1>Нет позиций</h1>
                    {user_role != 'category_manager' ?
                        <button onClick={showCreateModal} className="button-4" style={{ width: '160px' }}>Добавить позицию</button>
                        :
                        <></>
                    }
                </>
                :
                <>
                    <h1>Позиции:</h1>

                    <ItemTable applicationInfo={applicationInfo} data={items} refresh={refresh} />
                    {user_role != 'category_manager' ?
                        <button onClick={showCreateModal} className="button-4" style={{ width: '160px', margin: '20px' }}>Добавить позицию</button>
                        :
                        <></>
                    }
                </>
            }

        </div>
    )
}

export default ApplicationPage
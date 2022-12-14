import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/AllUsersPage.scss'
import CreateItemWindow from '../components/CreateItemWindow'
import { Context } from '../index'
import IApplicationItem from '../interfaces/IApplicationItem'
import ItemTable from '../components/ItemTable'


const ApplicationPage = () => {
    const id = useParams().id!

    const { store } = useContext(Context)

    const [showForm, setShowForm] = useState(false)
    const [items, setItems] = useState<IApplicationItem[]>([])

    const user_role = store.user.role.role

    const showCreateModal = () => {
        setShowForm(prev => {
            prev = !prev
            return prev
        })
    }

    useEffect(() => {
        store.getApplicationItems(id).then(result => {
            if (result == null) {
                return
            }
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
        <div className='all_users_main'>
            <h1>ID заявки: {id}</h1>
            {user_role != 'category_manager' ?
                <button onClick={showCreateModal} className="button-4" style={{width:'160px'}}>Добавить позицию</button>
                :
                <></>
            }

            {showForm ?
                <CreateItemWindow id={id} show={showCreateModal} refresh={refresh} />
                :
                <></>
            }

            {items.length == 0 ?
                <h1>Нет позиций</h1>
                :
                <>
                    <h1>Позиции:</h1>
                    <ItemTable data={items} />
                </>
            }

        </div>
    )
}

export default ApplicationPage
import React from 'react'
import { useParams } from 'react-router-dom'
import Table from '../components/Table'
import '../styles/AdminPage.scss'


const ApplicationPage:React.FC = () => {
    const id = useParams().id



    return(
        <div className='admin_main'>
            <h1>{id}</h1>
        </div>
    )
}

export default ApplicationPage
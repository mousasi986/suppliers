import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import '../styles/CreateApplicationWindow.scss'
import { useEffect } from 'react'
import IApplication from '../interfaces/IApplication'
import Input from './Input'
import { Context } from '../index'
import ReactDadataBox from 'react-dadata-box';

const CreateApplicationWindow = (props: any) => {
    const { store } = useContext(Context)
    const dadata = process.env.REACT_APP_DADATA_TOKEN
    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.show()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])


    const [main, setMain] = useState({
        number: '',
        date: '',
        supplier: '',
        company: '',
        category_manager: '',
        status: 'Черновик'
    })

    const submitHandler = () => {
        const data ={
            phone: store.user.phone,
            data : {
                ...main
            }
        }
        store.addApplication(data).then(()=>{props.refresh()})
        props.show()
    }

    const changeMainHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMain({ ...main, [e.target.name]: e.target.value })
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setMain({ ...main, [e.target.name]: e.target.value })
    }
    const changeDadataHandler = (suggestion: any) => {
        setMain({...main, company: suggestion.unrestricted_value})  
    }

    return (
        <div className='dark_modal'>
            <div className='createApplicationWindow'>
                <div className='mainInfo'>
                    <h1>Новая заявка</h1>
                    <div className='mainInfoBox'>
                        <Input settings={{ label: 'Номер', name: 'number', type: 'text' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Дата', name: 'date', type: 'date' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Поставщик', name: 'supplier', type: 'text' }} changeHandler={changeMainHandler} />
                    </div>
                    <div className='mainInfoBox'>
                        {/* <Input settings={{ label: 'Компания', name: 'company', type: 'text' }} changeHandler={changeMainHandler} /> */}
                        <div className='customInp'>
                            <label>Компания</label>
                            <ReactDadataBox token={dadata!} query="" type='party' onChange={changeDadataHandler} />
                        </div>
                        <Input settings={{ label: 'Кат. менеджер', name: 'category_manager', type: 'text' }} changeHandler={changeMainHandler} />
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <div className='customInp'>
                                <label style={{ width: '180px', height: '22px', overflow: 'hidden' }} htmlFor="status">Статус</label>
                                <select style={{ height: '24px' }} name='status' onChange={changeSelectHandler}>
                                    <option value='Черновик'>Черновик</option>
                                    <option value='Запрос'>Запрос</option>
                                    <option value='В работе'>В работе</option>
                                    <option value='Согласовано'>Согласовано</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttonsBox'>
                    <button onClick={submitHandler}>Создать</button>
                    <button onClick={props.show}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default CreateApplicationWindow
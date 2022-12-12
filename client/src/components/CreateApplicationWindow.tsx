import React, { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/CreateApplicationWindow.scss'
import { useEffect } from 'react'
import IApplication from '../interfaces/IApplication'
import Input from './Input'

const CreateApplicationWindow = (props: any) => {

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.show()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])



    const [item, setItem] = useState({
        barcode: '',
        name: '',
        nds: '',
        trademark: '',
        country: '',
        marking: '',
        price: '',
        recommended_price: '',
        size: '',
        weight: '',
        photo: ''
    })

    const [main, setMain] = useState({
        number: '',
        date: '',
        supplier: '',
        company: '',
        category_manager: '',
        status: ''
    })

    const submitHandler = () => {
        let data: IApplication = { ...main, items: [item] }
        console.log(data)
    }

    const changeMainHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMain({ ...main, [e.target.name]: e.target.value })
    }
    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setMain({ ...main, [e.target.name]: e.target.value })
    }


    return (
        <div className='dark_modal'>
            <div className='createApplicationWindow'>
                <div className='mainInfo'>
                    <h1>Основная информация</h1>
                    <div className='mainInfoBox'>
                        <Input settings={{ label: 'Номер', name: 'number', type: 'text' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Дата', name: 'date', type: 'date' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Поставщик', name: 'supplier', type: 'text' }} changeHandler={changeMainHandler} />
                    </div>
                    <div className='mainInfoBox'>
                        <Input settings={{ label: 'Компания', name: 'company', type: 'text' }} changeHandler={changeMainHandler} />
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
                <h2>Дополнительная информация</h2>
                <div className='dopInfo'>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Штрих-код', name: 'barcode', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Имя', name: 'name', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'НДС', name: 'nds', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Торговая марка', name: 'trademark', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Страна', name: 'country', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Маркировка', name: 'marking', type: 'text' }} changeHandler={changeInfoHandler} />
                    </div>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Цена', name: 'price', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Рек. цена', name: 'recommended_price', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Размер', name: 'size', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Вес', name: 'weight', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Фото', name: 'photo', type: 'text' }} changeHandler={changeInfoHandler} />
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
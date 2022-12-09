import React, { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/CreateApplicationWindow.scss'
import { useEffect } from 'react'
import IApplication from '../interfaces/IApplication'
import Input from './Input'
import { formToJSON } from 'axios'

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


    
    const [info, setInfo] = useState({
        country: '',
        marking: '',
        name: '',
        nds: '',
        price: 0,
        recommended_price: 0,
        size: '',
        trademark: '',
        weight: '',
        photo: ''
    })

    const [main, setMain] = useState({
        number: 0,
        date: '',
        company: '',
        barcode: 0,
        status: '',
    })

    const submitHandler = () => {
        let data:IApplication ={...main, info: info}
        console.log(data)
    }

    const changeMainHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMain({...main, [e.target.name]: e.target.value})
    }
    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    return (
        <div className='dark_modal'>
            <div className='createApplicationWindow'>
                <div className='mainInfo'>
                    <h1>Основная информация</h1>
                    <div className='mainInfoBox'>
                        <Input settings={{ label: 'Номер', name: 'number', type: 'text' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Дата', name: 'date', type: 'text' }} changeHandler={changeMainHandler} />
                    </div>
                    <div className='mainInfoBox'>
                        <Input settings={{ label: 'Компания', name: 'company', type: 'text' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Штрих-код', name: 'barcode', type: 'text' }} changeHandler={changeMainHandler} />
                        <Input settings={{ label: 'Статус', name: 'status', type: 'text' }} changeHandler={changeMainHandler} />
                    </div>
                </div>
                <h2>Дополнительная информация</h2>
                <div className='dopInfo'>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Имя', name: 'name', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'НДС', name: 'nds', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Торговая марка', name: 'trademark', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Страна', name: 'country', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Маркировка', name: 'marking', type: 'text' }} changeHandler={changeInfoHandler} />
                    </div>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Цена', name: 'price', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Рек. цена', name: 'reccomended_price', type: 'text' }} changeHandler={changeInfoHandler} />
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
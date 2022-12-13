import React, { ChangeEvent, useContext, useState } from 'react'
import '../styles/CreateItemWindow.scss'
import { useEffect } from 'react'

import Input from './Input'
import { Context } from '../index'

const CreateItemWindow = (props: any) => {
    const {store} = useContext(Context)
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



    const submitHandler = () => {
        console.log(item)
        // store.addApplication(main)
    }

    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }



    return (
        <div className='dark_modal'>
            <div className='createApplicationWindow'>
                <h2>Добавить позицию</h2>
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

export default CreateItemWindow
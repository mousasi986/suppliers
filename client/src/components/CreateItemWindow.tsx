import React, { ChangeEvent, useContext, useState } from 'react'
import '../styles/CreateItemWindow.scss'
import { useEffect } from 'react'

import Input from './Input'
import { Context } from '../index'

import ReactDadataBox from 'react-dadata-box';

const CreateItemWindow = (props: any) => {
    const { store } = useContext(Context)
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
        nds: '0',
        trademark: '',
        country: '',
        marking: 'Парфюмерия',
        price: '',
        recommended_price: '',
        size: '',
        weight: '',
        photo: ''
    })


    const submitHandler = () => {
        const data = {
            id: props.id,
            data: {
                ...item
            }
        }
        // console.log(data)
        store.addApplicationItem(data).then(() => { props.refresh() })
        props.show()
    }

    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeDadataHandler = (suggestion: any) => {
        setItem({...item, country: suggestion.unrestricted_value})  
    }


    return (
        <div className='dark_modal'>
            <div className='createApplicationWindow'>
                <h2>Добавить позицию</h2>
                <div className='dopInfo'>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Штрих-код', name: 'barcode', type: 'text' }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Имя', name: 'name', type: 'text' }} changeHandler={changeInfoHandler} />
                        <div className='customInp'>
                            <label style={{ width: '180px', height: '22px', overflow: 'hidden' }} htmlFor="nds">НДС %</label>
                            <select style={{ height: '24px' }} name='nds' onChange={changeSelectHandler}>
                                <option value='0'>0</option>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                            </select>
                        </div>

                        <Input settings={{ label: 'Торговая марка', name: 'trademark', type: 'text' }} changeHandler={changeInfoHandler} />
                        <div className='customInp'>
                            <label>Страна</label>
                            <ReactDadataBox token="0784075aabbbf76e37f7d3b9fcf20d393da37b73" query="" type='country' onChange={changeDadataHandler} />
                        </div>
                        {/* <Input settings={{ label: 'Страна', name: 'country', type: 'text' }} changeHandler={changeInfoHandler} /> */}
                        {/* <Input settings={{ label: 'Маркировка', name: 'marking', type: 'text' }} changeHandler={changeInfoHandler} /> */}
                        <div className='customInp'>
                            <label style={{ width: '180px', height: '22px', overflow: 'hidden' }} htmlFor="marking">Маркировка</label>
                            <select style={{ height: '24px' }} name='marking' onChange={changeSelectHandler}>
                                <option value='Парфюмерия'>Парфюмерия</option>
                                <option value='Одежда'>Одежда</option>
                                <option value='Обувь'>Обувь</option>
                            </select>
                        </div>
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
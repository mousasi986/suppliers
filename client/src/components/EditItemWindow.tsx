import React, { ChangeEvent, useEffect, useState } from 'react'
import '../styles/EditItemWindow.scss'
import Input from './Input'
import ReactDadataBox from 'react-dadata-box';
import IApplicationItem from '../interfaces/IApplicationItem';

interface EditItemProps {
    itemInfo: IApplicationItem,
    show: VoidFunction
}

const EditItemWindow = ({ itemInfo, show }: EditItemProps) => {
    const dadata = process.env.REACT_APP_DADATA_TOKEN
    const [item, setItem] = useState({
        barcode: itemInfo.barcode,
        name: itemInfo.name,
        nds: itemInfo.nds,
        trademark: itemInfo.trademark,
        country: itemInfo.country,
        marking: itemInfo.marking,
        price: itemInfo.price,
        recommended_price: itemInfo.recommended_price,
        size: itemInfo.size,
        weight: itemInfo.weight,
        photo: itemInfo.photo
    })

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                show()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])


    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeDadataHandler = (suggestion: any) => {
        setItem({ ...item, country: suggestion.unrestricted_value })
    }

    const addFieldHandler = () => {
        show()
        console.log(item)
    }
    
    return (
        <div className='dark_modal'>
            <div className='editItemWindow'>
                <h2>Изменить позицию</h2>
                <div className='dopInfo'>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Штрих-код', name: 'barcode', type: 'text', value: item.barcode }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Имя', name: 'name', type: 'text', value: item.name }} changeHandler={changeInfoHandler} />
                        <div className='customInp'>
                            <label style={{ width: '180px', height: '22px', overflow: 'hidden' }} htmlFor="nds">НДС %</label>
                            <select defaultValue={item.nds} style={{ height: '24px' }} name='nds' onChange={changeSelectHandler}>
                                <option value='0'>0</option>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                            </select>
                        </div>

                        <Input settings={{ label: 'Торговая марка', name: 'trademark', type: 'text', value: item.trademark }} changeHandler={changeInfoHandler} />

                        {item.country != undefined ?
                            <Input settings={{ label: 'Страна', name: 'country', type: 'text', value: item.country }} changeHandler={changeInfoHandler} />
                            :
                            <div className='customInp'>
                                <label>Страна</label>
                                <ReactDadataBox token={dadata!} query="" type='country' onChange={changeDadataHandler} />
                            </div>
                        }

                        {/* <Input settings={{ label: 'Страна', name: 'country', type: 'text' }} changeHandler={changeInfoHandler} /> */}
                        {/* <Input settings={{ label: 'Маркировка', name: 'marking', type: 'text' }} changeHandler={changeInfoHandler} /> */}
                        <div className='customInp'>
                            <label style={{ width: '180px', height: '22px', overflow: 'hidden' }} htmlFor="marking">Маркировка</label>
                            <select defaultValue={item.marking} style={{ height: '24px' }} name='marking' onChange={changeSelectHandler}>
                                <option value='Парфюмерия'>Парфюмерия</option>
                                <option value='Одежда'>Одежда</option>
                                <option value='Обувь'>Обувь</option>
                            </select>
                        </div>
                    </div>
                    <div className='dopInfoBox'>
                        <Input settings={{ label: 'Цена', name: 'price', type: 'text', value: item.price }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Рек. цена', name: 'recommended_price', type: 'text', value: item.recommended_price }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Размер', name: 'size', type: 'text', value: item.size }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Вес', name: 'weight', type: 'text', value: item.weight }} changeHandler={changeInfoHandler} />
                        <Input settings={{ label: 'Фото', name: 'photo', type: 'text', value: item.photo }} changeHandler={changeInfoHandler} />
                    </div>
                </div>
                <div className='buttonsBox'>
                    <button onClick={addFieldHandler}>Изменить</button>
                    <button onClick={show}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default EditItemWindow
import React, { ChangeEvent, useEffect, useState } from 'react'
import '../styles/EditItemWindow.scss'
import Input from './Input'
import ReactDadataBox from 'react-dadata-box';
import IApplicationItem from '../interfaces/IApplicationItem';

interface EditItemProps {
    itemInfo: IApplicationItem,
    show: VoidFunction
}
interface Field {
    key: string,
    value: string
}

const EditItemWindow = ({ itemInfo, show }: EditItemProps) => {
    const dadata = process.env.REACT_APP_DADATA_TOKEN

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                show()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

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

    //States with 1 field and with array of fields
    const [field, setField] = useState<Field>({
        key: '',
        value: ''
    })
    const [fields, setFields] = useState<Field[]>([field])



    //Edit existing fields of item
    const changeInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const changeDadataHandler = (suggestion: any) => {
        setItem({ ...item, country: suggestion.unrestricted_value })
    }


    //New fields handlers
    const changeFieldHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setField({ ...field, [e.target.name]: e.target.value })
    }
    const addFieldHandler = () => {
        setFields([...fields, field])
        setField({ key: '', value: '' })
    }

    //Submiting changes
    const submitChangeItem = () => {
        show()
        console.log(item, fields)
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
                <h2>Дополнительные поля</h2>
                <div className='newFields'>
                    {fields.map(el =>
                        <div className='newFieldsBox'>
                            <Input settings={{ label: 'Название', name: 'key', type: 'text' }} changeHandler={changeFieldHandler} />
                            <Input settings={{ label: 'Значение', name: 'value', type: 'text' }} changeHandler={changeFieldHandler} />
                        </div>
                    )}
                </div>

                <div className='buttonsBox'>
                    <button onClick={submitChangeItem}>Применить</button>
                    <button onClick={addFieldHandler}>Добавить поле</button>
                    <button onClick={show}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default EditItemWindow
import React, { ChangeEvent, useEffect, useState, useContext } from 'react'
import '../styles/EditItemWindow.scss'
import Input from './Input'
import ReactDadataBox from 'react-dadata-box';
import IApplicationItem from '../interfaces/IApplicationItem';
import { Context } from '../index'
interface EditItemProps {
    itemInfo: IApplicationItem,
    show: VoidFunction
}
interface Field {
    key: string,
    value: string
}

interface ExistingField {
    key: string,
    value: string,
    _id: string
}
const EditItemWindow = ({ itemInfo, show }: EditItemProps) => {
    const dadata = process.env.REACT_APP_DADATA_TOKEN
    const { store } = useContext(Context)

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                show()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    useEffect(() => {
        if (itemInfo.fields.length != 0) {
            setExistingFields(itemInfo.fields)
        }
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

    const [existingFields, setExistingFields] = useState<ExistingField[]>([])


    //States with 1 field and with array of fields
    const [field, setField] = useState<Field>({
        key: '',
        value: ''
    })
    const [fields, setFields] = useState<Field[]>([])

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
    const changeFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setField(prev => {
            let newData = { ...prev, [e.target.name]: e.target.value }
            console.log(newData)
            return newData
        })
    }

    const changeExistingFieldHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        if (e.target.name == 'key') {
            setExistingFields(prev => {
                let newData = [...prev]
                let index = existingFields.findIndex(el => el._id == id)
                newData[index].key = e.target.value
                console.log(newData[index])
                return newData
            })
        } else {
            setExistingFields(prev => {
                let newData = [...prev]
                let index = existingFields.findIndex(el => el._id == id)
                newData[index].value = e.target.value
                console.log(newData[index])
                return newData
            })
        }
    }

    const addFieldHandler = () => {
        setFields(prev => {
            let newData = prev
            newData.push(field)
            return newData
        })
        setField({ key: '', value: '' })
    }

    //Submiting changes
    const submitChangeItem = () => {
        show()
    
        let allFields = [...fields, existingFields]
        
        let data = {
            id: itemInfo._id,
            data: {
                ...item,
                fields: allFields
            }
        }
        store.updateApplicationItem(data)
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

                    <div className='newFieldsBox'>
                        <h3>Добавить поле</h3>
                        <Input settings={{ label: 'Название', name: 'key', type: 'text', value: field.key }} changeHandler={changeFieldHandler} />
                        <Input settings={{ label: 'Значение', name: 'value', type: 'text', value: field.value }} changeHandler={changeFieldHandler} />
                    </div>
                    {existingFields.map(el =>
                        <div className='newFieldsBox'>
                            <h3>Существующее поле</h3>
                            <Input settings={{ label: 'Название', name: 'key', type: 'text', value: el.key }} changeHandler={(event: any) => changeExistingFieldHandler(event, el._id)} />
                            <Input settings={{ label: 'Значение', name: 'value', type: 'text', value: el.value }} changeHandler={(event: any) => changeExistingFieldHandler(event, el._id)} />
                        </div>
                    )}
                    {fields.map(el =>
                        <div className='newFieldsBox'>
                            <h3>Новое поле</h3>
                            <Input settings={{ label: 'Название', name: 'key', type: 'text', value: el.key }} changeHandler={changeExistingFieldHandler} />
                            <Input settings={{ label: 'Значение', name: 'value', type: 'text', value: el.value }} changeHandler={changeExistingFieldHandler} />
                        </div>
                    )}
                </div>

                <div className='buttonsBox'>
                    <button onClick={submitChangeItem} className="button-4" style={{ width: '120px' }}>Применить</button>
                    {field.key == '' || field.value == '' ?
                        <button disabled onClick={addFieldHandler} className="button-4" style={{ width: '150px' }}>Добавить поле</button>
                        :
                        <button onClick={addFieldHandler} className="button-4" style={{ width: '150px' }}>Добавить поле</button>
                    }

                    <button onClick={show} className="button-4" style={{ width: '120px' }}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default EditItemWindow
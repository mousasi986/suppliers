import React from 'react'
import { useState, ChangeEvent } from 'react'

const TableStr = (props: any) => {
    const [form, setForm] = useState({
        barcode: '',
        name: '',
        price: '',
        nds: '',
        mark: ''
    })
    const sendForm = () => {
        console.log(form)
    }

    const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <tr onClick={() => props.showFunc(props.data.number, !props.data.show)}>
                <td>{props.data.number}</td>
                <td>{props.data.date}</td>
                <td>{props.data.supplier}</td>
                <td>{props.data.barcode}</td>
                {props.data.status ?
                    <td>1</td>
                    :
                    <td>0</td>
                }

            </tr>

            
            {props.data.show ?
                <div>
                    <label htmlFor="barcode">Штрих-код</label>
                    <input onChange={changeForm} type="text" name='barcode' />

                    <label htmlFor="name">Название</label>
                    <input onChange={changeForm} type="text" name='name' />

                    <label htmlFor="price">Цена</label>
                    <input onChange={changeForm} type="text" name='price' />

                    <label htmlFor="nds">НДС</label>
                    <input onChange={changeForm} type="text" name='nds' />

                    <label htmlFor="mark">Маркировка</label>
                    <input onChange={changeForm} type="text" name='mark' />

                    <button onClick={sendForm}>Изменить</button>
                </div>
                :
                <></>
            }
        </>
    )
}

export default TableStr
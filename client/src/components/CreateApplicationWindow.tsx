import React, { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/CreateApplicationWindow.scss'
import { useEffect } from 'react'

const CreateApplicationWindow = (props:any) => {

    useEffect(() => {
        const close = (e:KeyboardEvent) => {
          if(e.key === 'Escape'){
            props.show()
          }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[])

    const [form, setForm] = useState({
        barcode: '',
        name: '',
        price:'',
        nds: '',
        mark:''
    })

    const submitHandler = () =>{
        props.show()
        console.log(form)
    }

    const changeForm = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className='dark'>
            <div className='createApplicationWindow'>
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

                <button onClick={submitHandler}>Создать</button>
                <button onClick={props.show}>Закрыть</button>
            </div>
        </div>
    )
}

export default CreateApplicationWindow
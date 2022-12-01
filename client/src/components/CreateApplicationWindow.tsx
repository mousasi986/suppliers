import React from 'react'
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

    return (
        <div className='dark'>
            <div className='createApplicationWindow'>
                <label htmlFor="barcode">Штрих-код</label>
                <input type="text" name='barcode' />

                <label htmlFor="name">Название</label>
                <input type="text" name='name' />

                <label htmlFor="price">Цена</label>
                <input type="text" name='price' />

                <label htmlFor="nds">НДС</label>
                <input type="text" name='nds' />
                <button onClick={props.show}>Закрыть</button>
            </div>
        </div>
    )
}

export default CreateApplicationWindow
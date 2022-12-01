import React from 'react'

const TableStr = (props: any) => {

    return (
        <>
            <tr onClick={props.showFunc}>
                <td>ок</td>
                <td>ок</td>
                <td>ок</td>
                <td>ок</td>
                <td>ок</td>
            </tr>
            {props.show ?
            <>
                <tr>
                    <td >
                        <label htmlFor="barcode">Штрих-код</label>
                        <input type="text" name='barcode' />
                    </td>
                    <td>
                        <label htmlFor="name">Название</label>
                        <input type="text" name='name' />
                    </td>
                    <td>
                        <label htmlFor="price">Цена</label>
                        <input type="text" name='price' />
                    </td>
                    <td>
                        <label htmlFor="nds">НДС</label>
                        <input type="text" name='nds' />
                    </td>
                    <td>
                        <label htmlFor="mark">Маркировка</label>
                        <input type="text" name='mark' />
                    </td>
                </tr>
                <button>Создать</button>
                </>
                :
                <></>
            }
        </>
    )
}

export default TableStr
import React, { useState, useEffect, useContext } from 'react'
import '../styles/Table.scss'
import ItemTableStr from './ItemTableStr'
import IApplicationItem from '../interfaces/IApplicationItem'
import IApplication from '../interfaces/IApplication'


interface ItemTableProps {
    data: Array<IApplicationItem>,
    refresh: VoidFunction,
    applicationInfo: IApplication
}

const ItemTable = ({ data, refresh, applicationInfo }: ItemTableProps) => {
    
    return (
        <>
            {data.length == 0 ?
                <></>
                :
                <>
                    <table id='applications'>
                        <tbody>
                            <tr>
                                <th>Штрих-код</th>
                                <th>Название</th>
                                <th>НДС</th>
                                <th>Торговая марка</th>
                                <th>Страна</th>
                                <th>Маркировка</th>
                                <th>Цена</th>
                                <th>Рек. цена</th>
                                <th>Размер</th>
                                <th>Вес</th>
                                <th>Фото</th>
                                <th>Доп. поля</th>
                            </tr>
                            {data.map(el =>
                                <ItemTableStr key={el._id} data={el} applicationInfo={applicationInfo} refresh={refresh}/>
                            )}
                        </tbody>
                    </table>
                </>
            }

        </>
    )
}

export default ItemTable
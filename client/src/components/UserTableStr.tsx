import { useNavigate } from 'react-router-dom'
import IUser from '../interfaces/IUser'

interface ITableStrProps {
    data: IUser
}

const UserTableStr = ({data}:ITableStrProps) => {
    const navigate = useNavigate()

    // const applicationShow = () =>{
    //     navigate(`/application/${data._id}`)
    // }
    return (
        <>
            <tr>
                <td>{data._id}</td>
                <td>{data.chatId}</td>
                <td>{data.phone}</td>
                <td>
                    <select name="role" id="role">
                        <option value="admin">Администратор</option>
                        <option value="supplier">Поставщик</option>
                        <option value="category_manager">Категорийный менеджер</option>
                    </select>
                </td>
            </tr>
        </>
    )
}

export default UserTableStr
import { useNavigate } from 'react-router-dom'
import IApplication from '../interfaces/IApplication'

interface ITableStrProps {
    data: IApplication
}

const TableStr = ({data}:ITableStrProps) => {
    const navigate = useNavigate()

    const applicationShow = () =>{
        navigate(`/application/${data._id}`)
    }
    return (
        <>
            <tr onClick={applicationShow}>
                <td>{data.number}</td>
                <td>{data.date}</td>
                <td>{data.supplier}</td>
                
                {data.status ?
                    <td>1</td>
                    :
                    <td>0</td>
                }
            </tr>
        </>
    )
}

export default TableStr
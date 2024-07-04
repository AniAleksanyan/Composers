import { Link } from "react-router-dom";

export const CompossersTableRow = ({ id, name, surname, born, died, photo_url }) => {
    return (
        <tr>
            <td><img src={photo_url} alt="" width="200px"  height="250px" /></td>
            <td>{name} {surname}</td>
            <td>{born}-{died}</td>
            <td><Link to={"/edit/"+id}>Edit</Link></td>
        </tr>
    )
}
import { useContext } from 'react';
import { CompossersTableRow } from './ComposersTableRow';

export const CompossersTable = ({items}) => {
    return (
        <div>
            <h3>Composers Table</h3>
            <table>
                <thead>
                    <tr>
                        <th >Photo</th>
                        <th>Name Surname</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => <CompossersTableRow key={item.id} {...item} />)}
                </tbody>
            </table>
        </div>
    )
}
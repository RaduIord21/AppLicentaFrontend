import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link} from 'react-router-dom';

const Goal = () => {
    return (
        <tr>
            <th><Button className='btn btn-light'><Link to='/GoalDetails'>Goal x </Link></Button></th>
            <td><Button className='btn btn-light'>People</Button></td>
            <td><Button className='btn btn-light'>Tasks</Button></td>
            <td><Button className='btn btn-light'>Props</Button></td>
            <td><Button className='btn btn-light'>Delete</Button></td>
            <td>Progress :</td>
            <td>Status :</td>            
        </tr>
    );
}

export default Goal;

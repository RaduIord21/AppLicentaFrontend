import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const Routine = () => {
    return (    
        <tr>
            <th><Button className='btn btn-light'>Routine x </Button></th>
            <td><Button className='btn btn-light'>Props</Button></td>
            <td><Button className='btn btn-light'>Tasks</Button></td>
            <td><Button className='btn btn-light'>Delete</Button></td>
            <td>Next routine :</td>
        </tr>
    );
}
 
export default Routine;

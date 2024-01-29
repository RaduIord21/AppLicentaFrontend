import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {PlusCircle} from 'phosphor-react';
import Table from 'react-bootstrap/Table';
import Routine from './Routine';


const Routines = () => {
    const [routineCount, setRoutineCount] = useState(0);
    const [Routines, setRoutines] = useState([]);
    const manageRoutineNumbers = () => {
    const newRoutine = {
      id: routineCount + 1,
      text: `Routine ${routineCount + 1}`,
    };
    setRoutines((prevRoutines) => [...prevRoutines, newRoutine]);
    setRoutineCount((prevCount) => prevCount + 1);
  };
    return (
        <div className='Routines'>
      <h1>Manage Routines</h1>
      {Routines.length === 0 ? (
        <div>
            <p>No Routines yet. Add some using the <PlusCircle size={24} weight="fill" /> </p>
            <Button onClick={manageRoutineNumbers} className='btn btn-dark'><PlusCircle size={24} weight="fill" /></Button>
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><Button onClick={manageRoutineNumbers} className='btn btn-dark'><PlusCircle size={24} weight="fill" /></Button></th>
            </tr>
          </thead>
          <tbody>
            {Routines.map((routine) => (
              <Routine key={routine.id} text={routine.text} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
    );
}

export default Routines;

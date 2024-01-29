import React, { useState } from 'react';
import Goal from './Goal'; // Import your Goal component
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {PlusCircle} from 'phosphor-react';


const Goals = () => {
  const [goalCount, setGoalCount] = useState(0);
  const [goals, setGoals] = useState([]);

  const manageGoalNumbers = () => {
    // Create a new goal object with a unique id
    const newGoal = {
      id: goalCount + 1,
      text: `Goal ${goalCount + 1}`,
    };

    // Update the state to include the new goal
    setGoals((prevGoals) => [...prevGoals, newGoal]);

    // Increment the goal count
    setGoalCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='Goals'>
      <h1>Manage Goals</h1>
      {goals.length === 0 ? (
        <div>
            <p>No goals yet. Add some using the <PlusCircle size={24} weight="fill" /> </p>
            <Button onClick={manageGoalNumbers} className='btn btn-dark'><PlusCircle size={24} weight="fill" /></Button>
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><Button onClick={manageGoalNumbers} className='btn btn-dark'><PlusCircle size={24} weight="fill" /></Button></th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <Goal key={goal.id} text={goal.text} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Goals;

import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

const Dashboard = () => {
    return (
        <Container fluid>
            <Link to='/Goals' className='btn btn-primary'>Manage Goals</Link>
            <Link to='/Routines' className='btn btn-primary'>Manage Routines</Link>
        </Container>
    );
}


export default Dashboard;

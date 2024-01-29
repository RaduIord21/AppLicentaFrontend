import React, {useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {

    const fetchData = () => {
        try {
            axios.get('https://localhost:7107/').then( (res) => {
                console.log(res.data);
            });
            //setItems(response.data);
        } catch (error) {
          console.error('Eroare la preluarea datelor:', error);
        }
      };

    useEffect(() => {
        fetchData();
  }, []); 
    return (
        <Container>
            <Stack gap={2} className='col-md-5 mx-auto'>
                <Link to='/Dashboard'><Button size="lg" className='btn btn-primary'>Item Manager</Button></Link>
                <Link to='/TaskManager'><Button size="lg" className='btn btn-primary'>Task Manager</Button></Link>
                <Link to='/JoinGoals'><Button size="lg" className='btn btn-primary'>Join Goals</Button></Link>
            </Stack>
        </Container>
    );
}

export default Home;
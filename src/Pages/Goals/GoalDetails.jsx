import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const GoalDetails = () => {
    return (
        <Container>
            <ul className='container d-flex '>
                <li><h2>Goal x</h2></li>
                <li><h4>Description:</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque aliquam exercitationem modi eveniet voluptatem tempora cupiditate 
                    excepturi, ad atque, expedita laboriosam amet et.</li>
                <li><h4>Objective:</h4>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt.</li>
                <li>Goal code : <b>a1b2c3d4e5</b></li>

            </ul>
        </Container>
    );
}

export default GoalDetails;

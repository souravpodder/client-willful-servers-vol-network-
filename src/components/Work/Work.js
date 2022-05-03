import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Work.css';

const Work = ({ work }) => {
  const navigate = useNavigate();

  const navigateToRegisterVolunteer = (id) => {
    navigate(`/register/${id}`);
  }
  return (
    <div className='col-md-4 workCard' onClick={() => navigateToRegisterVolunteer(work._id)}>
      <Card style={{ height: '400px' }}>
        <Card.Img className='workImage' variant="top" src={work.img} />
        <Card.Body>
          <Card.Title className='text-center'>{work.workName}</Card.Title>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Work;
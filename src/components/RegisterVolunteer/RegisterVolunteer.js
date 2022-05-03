import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RegisterVolunteer = () => {
  const { workId } = useParams();

  const [work, setWork] = useState('');
  console.log(work);

  useEffect(() => {
    const url = `https://ancient-shore-53831.herokuapp.com/work/${workId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setWork(data)
      })
  }, [workId])

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const registerInfo = {
      email: e.target.email.value,
      workName: work.workName,
      name: e.target.name.value
    }

    console.log(registerInfo);

    fetch('https://ancient-shore-53831.herokuapp.com/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(registerInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })


  }

  return (
    <div className='w-50 mx-auto'>
      <h3 className='text-center my-3'>Register as a Volunteer</h3>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">

          <Form.Control type="text" placeholder="Your Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="email" placeholder="Your Email" name="email" required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Description" name="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder={work.workName} name="workname" />
        </Form.Group>

        <div className='w-25 mx-auto'>
          <Button className='w-100' variant="primary" type="submit">
            Registration
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterVolunteer;
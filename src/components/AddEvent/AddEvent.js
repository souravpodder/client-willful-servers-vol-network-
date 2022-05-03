import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddEvent = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const workInfo = {
      workName: e.target.name.value,
      description: e.target.description.value,
      img: e.target.url.value
    }
    console.log(workInfo);

    fetch('https://ancient-shore-53831.herokuapp.com/work', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(workInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }


  return (
    <div className='w-50 mx-auto py-4'>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Event Title</Form.Label>
          <Form.Control type="text" placeholder="Event Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" name="description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicimgurl">
          <Form.Label>Event Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image Url" name="url" />
        </Form.Group>
        <div className='w-25 mx-auto'>
          <Button className='w-100' variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddEvent;
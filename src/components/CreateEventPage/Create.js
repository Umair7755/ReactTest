import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/Context';
import './Create.css';

const Create = () => {
  const navigate = useNavigate();
  const {
    event, setEvent,
    host, setHost,
    start, setStart,
    end, setEnd,
    location, setLocation,
    pic, setPic
  } = useContext(GlobalContext);

  const submitData = (e) => {
    e.preventDefault();
    if (event === '' || host === '' || start === '' || end === '' || location === '' || pic === '') {
      return alert('All fields are required to proceed');
    }
    else {
      navigate('/event');
    }
  }

  return (
    <div className='create-parent'>
      <h3 className='create-heading'>Create Event Form</h3>

      <Form className='form-create'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control defaultValue={event} onChange={(e) => setEvent(e.target.value)} type="text" placeholder="Enter event name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Host Name</Form.Label>
          <Form.Control defaultValue={host} onChange={(e) => setHost(e.target.value)} type="text" placeholder="Enter host name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Start Date</Form.Label>
          <Form.Control defaultValue={start} onChange={(e) => setStart(e.target.value)} type="date" placeholder="Enter start date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>End Date</Form.Label>
          <Form.Control defaultValue={end} onChange={(e) => setEnd(e.target.value)} type="date" placeholder="Enter end date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control defaultValue={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter your location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Photo</Form.Label>
          <Form.Control onChange={(e) => setPic(e.target.files[0])} type="file" placeholder="Enter photo" />
        </Form.Group>

        <section className='next-btn-parent'>
          <Button onClick={submitData} className='create-btn' variant="primary" type="submit">Next</Button>
        </section>

      </Form>
    </div >
  )
}

export default Create;
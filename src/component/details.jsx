import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Details = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const item = location.state.object;

  return (
    <>
    <div>
      details page
    </div>
    <button type='button' onClick={()=>navigate(-1)}>back to home page</button>
    <div>{item.id}</div>
    <div>{item.title}</div>
    <div>{item.link}</div>
    <img src={item.image} alt="" />
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
    </>
  )
}

export default Details;

import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

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
    </>
  )
}

export default Details;

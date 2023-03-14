import React from 'react'
import { useNavigate } from 'react-router-dom';

const Details = ({ Route }) => {

    

    const navigate = useNavigate();

  return (
    <>
    <div>
      details page
    </div>
    <button type='button' onClick={()=>navigate(-1)}>back to home page</button>
    </>
  )
}

export default Details;

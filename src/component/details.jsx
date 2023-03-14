import React from 'react'
import { useNavigate } from 'react-router-dom';

const Details = ({ navigation }) => {

    const navigate = useNavigate();

  return (
    <>
    <div>
      details page
    </div>
    <button type='button' onClick={()=>navigate(-1)}>back to home page</button>
    <button type='button' onPress={() => navigation.goBack()}>go back</button>
    </>
  )
}

export default Details;

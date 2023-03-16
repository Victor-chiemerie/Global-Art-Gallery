import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap/'
import style from '../styles/detail.module.scss';

const Details = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const item = location.state.object;
    console.log(item);

    const list = item.length ? (
      <ul className={style.artList}>
      {
          item.map((art, index) => (
              <li key={art.id} className={`item${index}`} onClick={()=>navigate('/', {
                  state: {
                      object: art,
                  },
              })}>
              <img src={art.image} alt="" />
              <div>
              <p className="text-dark text-uppercase h6">{art.title}</p>
              <menu>
              <p className="text-dark m-0">{art.type}</p>
              <i className="bi bi-arrow-right-circle-fill text-dark" style={{ fontSize: 20 }}></i>
              </menu>
              </div>
              </li>
          ))
      }
      </ul>
  ) : (<section>No Artwork Found</section>);

  return (
    <>
    <Container className='mt-4'>
    <Button type='button' variant="danger" onClick={()=>navigate(-1)}>back to home page</Button>
    <div className={style.top}>
        <img src={item[0].image} alt="Map of Europe" />
        <div>
        <h1 className='display-3 text-uppercase'><strong>{item[0].place_of_origin}</strong></h1>
        <h2>{item.length} Artwork</h2>
        </div>
        </div>
        <div className='h6'>{item[0].place_of_origin}'s Art list</div>
        <div  id={style.container}>
        {list}
        </div>
    </Container>
    </>
  )
}

export default Details;

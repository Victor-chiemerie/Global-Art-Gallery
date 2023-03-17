import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap/';
import style from '../styles/detail.module.scss';

const Details = () => {
  const location = useLocation();

  const art = location.state.object;

  return (
    <>
      <Container className="mt-4">
        <div className={style.detail}>
          <div><img src={art.image} alt="" className="mb-4" /></div>
          <menu className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Title</strong></h2>
              <p className="text-center">{art.title}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Type</strong></h2>
              <p className="text-center">{art.type}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Original Dimension</strong></h2>
              <p className="text-center">{art.dimensions}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Artistic display</strong></h2>
              <p className="text-center">{art.artist_display}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Artist</strong></h2>
              <p className="text-center">{art.credit_line}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Date Diplayed</strong></h2>
              <p className="text-center">{art.date_display}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Country</strong></h2>
              <p className="text-center">{art.place_of_origin}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-green"><strong>Exhibition Journey</strong></h2>
              <p className="text-center">{art.exhibition_history}</p>
            </div>
          </menu>
        </div>
      </Container>
    </>
  );
};

export default Details;

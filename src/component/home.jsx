/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import fetchData from '../redux/API';
import style from '../styles/home.module.scss';
import './loadingPage.css';
import Icon from '../images/Nok.jpeg';

const Home = () => {
  const BASE_URL = 'https://api.artic.edu/api/v1/artworks?page=1';
  const { artwork, status, pagination } = useSelector((store) => store.art);
  const [page, setPage] = useState(BASE_URL);
  const [nation, setNation] = useState('');
  const navigate = useNavigate();

  const nextPage = () => setTimeout(setPage(pagination.next_url), 1000);
  const prevPage = () => setTimeout(setPage(pagination.prev_url), 1000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  const searchfilter = (e) => {
    const { value } = e.target;
    setNation(value);
  };

  const prevP = pagination.page_number > 1 ? (
    <i
      className="bi bi-arrow-left-circle-fill text-dark left_back"
      style={{ fontSize: 50 }}
      onClick={prevPage}
    />
  ) : (
    ''
  );
  const nextP = pagination.page_number < 9964 ? (
    <i
      className="bi bi-arrow-right-circle-fill text-dark right_back"
      style={{ fontSize: 50 }}
      onClick={nextPage}
    />
  ) : (
    ''
  );
  const pageStatus = status === 'loading...' ? (
    <section className="loading-section">
      <div className="loader">
        <div className="dot" style={{ '--i': '0' }} />
        <div className="dot" style={{ '--i': '1' }} />
        <div className="dot" style={{ '--i': '2' }} />
        <div className="dot" style={{ '--i': '3' }} />
        <div className="dot" style={{ '--i': '4' }} />
        <div className="dot" style={{ '--i': '5' }} />
        <div className="dot" style={{ '--i': '6' }} />
        <div className="dot" style={{ '--i': '7' }} />
        <div className="dot" style={{ '--i': '8' }} />
      </div>
      <h4>loading...</h4>
      <div className="loader">
        <div className="dot" style={{ '--i': '0' }} />
        <div className="dot" style={{ '--i': '1' }} />
        <div className="dot" style={{ '--i': '2' }} />
        <div className="dot" style={{ '--i': '3' }} />
        <div className="dot" style={{ '--i': '4' }} />
        <div className="dot" style={{ '--i': '5' }} />
        <div className="dot" style={{ '--i': '6' }} />
        <div className="dot" style={{ '--i': '7' }} />
        <div className="dot" style={{ '--i': '8' }} />
      </div>
    </section>
  ) : (
    <h4>{status}</h4>
  );

  const displayArt = artwork.length ? (
    <ul className={`${style.artList} pb-5`}>
      {artwork
        .filter((country) => country.place_of_origin.includes(nation))
        .map((art, index) => (
          <li
            key={art.id}
            className={`item${index}`}
            onClick={() => navigate('/details', {
              state: {
                object: art,
              },
            })}
          >
            <img src={art.image} alt="" />
            <div>
              <i
                className="bi bi-arrow-right-circle-fill text-dark"
                style={{ fontSize: 20 }}
              />
              <menu>
                <h6 className="text-dark">{art.title}</h6>
                <p className="text-dark mb-0">{art.place_of_origin}</p>
              </menu>
            </div>
          </li>
        ))}
    </ul>
  ) : (
    <section>{pageStatus}</section>
  );

  return (
    <>
      <Container className="mt-4 mb-4">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="filter by country example (France)"
            onChange={searchfilter}
          />
        </div>
        <div className={style.top}>
          <img src={Icon} alt="Map of Europe" />
          <div>
            <h1 className="display-4 text-uppercase">
              <strong>Historical Art</strong>
            </h1>
            <h2>
              {artwork.length}
              {' '}
              Countries
            </h2>
          </div>
        </div>
        <div className="h6">Arts by country</div>
        <div className="d-flex justify-content-center">
          {displayArt}
          {prevP}
          {nextP}
        </div>
      </Container>
    </>
  );
};

export default Home;

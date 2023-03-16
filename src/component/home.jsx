import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchData from "../redux/API";
import { Container } from 'react-bootstrap';
import style from '../styles/home.module.scss';
import './loadingPage.css';
import Icon from '../images/Nok.jpeg';

const BASE_URL = 'https://api.artic.edu/api/v1/artworks?page=1'

const Home = () => {

    const Europe = [
        "France",
        "Russia",
        "Germany",
        "United Kingdom",
        "Italy",
        "Spain",
        "Ukraine",
        "Poland",
        "Romania",
        "Netherlands",
        "Belgium",
        "Czech Republic (Czechia)",
        "Greece",
        "Portugal",
        "Sweden",
        "Hungary",
        "Belarus",
        "Austria",
        "Serbia",
        "Switzerland",
        "Bulgaria",
        "Denmark",
        "Finland",
        "Slovakia",
        "Norway",
        "Ireland",
        "Croatia",
        "Moldova",
        "Bosnia and Herzegovina",
        "Albania",
        "Lithuania",
        "North Macedonia",
        "Slovenia",
        "Latvia",
        "Estonia",
        "Montenegro",
        "Luxembourg",
        "Malta",
        "Iceland",
        "Andorra",
        "Monaco",
        "Liechtenstein",
        "San Marino",
        "Holy See",
    ]

    const { artwork, status, pagination } = useSelector((store) => store.art);
    const [nation, setNation] = useState('');
    
    const searchfilter = (e) => {
        const { value } = e.target;
        setNation(value);
      };

    const meat = [];

    Europe.forEach((nation) => { 
        const me = artwork.filter((country) => country.place_of_origin === nation)
        if (me.length) {
            meat.push(me);
        }
    })


    const [page, setPage] = useState(BASE_URL);

    const navigate = useNavigate();

    const nextPage = () => {
        if (pagination.page_number < 9964) {
            setTimeout(setPage(pagination.next_url), 1000)
        } 
    }

    const prevPage = () => {
        if (pagination.page_number > 1) {
            setTimeout(setPage(pagination.prev_url), 1000)
        }
    }

    const prev_page = (pagination.page_number > 1) ? (<i className="bi bi-arrow-left-circle-fill text-dark left_back" style={{ fontSize: 50 }}  onClick={prevPage}></i>) : '';
    const next_page = (pagination.page_number < 9964) ? (<i className="bi bi-arrow-right-circle-fill text-dark right_back" style={{ fontSize: 50 }}  onClick={nextPage}></i>) : '';
    const pageStatus = (status === 'loading...') ? (
        <section className="loading-section">
            <div className="loader">
                <div className="dot" style={{ "--i" : "0" }} />
                <div className="dot" style={{ "--i" : "1" }} />
                <div className="dot" style={{ "--i" : "2" }} />
                <div className="dot" style={{ "--i" : "3" }} />
                <div className="dot" style={{ "--i" : "4" }} />
                <div className="dot" style={{ "--i" : "5" }} />
                <div className="dot" style={{ "--i" : "6" }} />
                <div className="dot" style={{ "--i" : "7" }} />
                <div className="dot" style={{ "--i" : "8" }} />
            </div>
            <h4>loading...</h4>
            <div className="loader">
                <div className="dot" style={{ "--i" : "0" }} />
                <div className="dot" style={{ "--i" : "1" }} />
                <div className="dot" style={{ "--i" : "2" }} />
                <div className="dot" style={{ "--i" : "3" }} />
                <div className="dot" style={{ "--i" : "4" }} />
                <div className="dot" style={{ "--i" : "5" }} />
                <div className="dot" style={{ "--i" : "6" }} />
                <div className="dot" style={{ "--i" : "7" }} />
                <div className="dot" style={{ "--i" : "8" }} />
            </div>
        </section>) : (<h4>{status}</h4>);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData(page));
    }, [dispatch, page]);

    const displayArt = artwork.length ? (
        <ul className={`${style.artList} pb-5`}>
        {
            artwork.filter((country) => country.place_of_origin.includes(nation)).map((art, index) => (
                <li key={art.id} className={`item${index}`} onClick={()=>navigate('/details', {
                    state: {
                        object: art,
                    },
                })}>
                <img src={art.image} alt="" />
                <div>
                <i className="bi bi-arrow-right-circle-fill text-dark" style={{ fontSize: 20 }}></i>
                <menu>
                <h6 className="text-dark">{art.title}</h6>
                <p className="text-dark text-uppercase mb-0">{art.place_of_origin}</p>
                </menu>
                </div>
                </li>
            ))
        }
        </ul>
    ) : (<section>{pageStatus}</section>);

    // const list = meat.length ? (
    //     <ul className={style.artList}>
    //     {
    //         meat.map((art, index) => (
    //             <li key={art.id} className={`item${index}`} onClick={()=>navigate('/details', {
    //                 state: {
    //                     object: art,
    //                 },
    //             })}>
    //             <img src={art[0].image} alt="" />
    //             <div>
    //             <i className="bi bi-arrow-right-circle-fill text-dark" style={{ fontSize: 20 }}></i>
    //             <menu>
    //             <h5 className="text-dark text-uppercase">{art[0].place_of_origin}</h5>
    //             <h6 className="text-dark">{art.length} Artwork</h6>
    //             </menu>
    //             </div>
    //             </li>
    //         ))
    //     }
    //     </ul>
    // ) : (<section>{pageStatus}</section>);

    return (
        <>
        <Container className='mt-4 mb-4'>
        <div className="form-group mb-2">
        <input type="text" className="form-control" placeholder="filter by country example (France)" onChange={searchfilter} />
      </div>
        <div className={style.top}>
            <img src={Icon} alt="Map of Europe" />
            <div>
            <h1 className='display-4 text-uppercase'><strong>Historical Art</strong></h1>
            <h2>{artwork.length} Countries</h2>
            </div>
        </div>
        <div className='h6'>
        Arts by country
        </div>
        <div  id={style.container}>
        {displayArt}
        {prev_page}
        {next_page}
        </div>
        </Container>
        </>
    )
}

export default Home;
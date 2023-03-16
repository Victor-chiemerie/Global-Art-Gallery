import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchData from "../redux/API";
import { Container, Button } from 'react-bootstrap';
import style from '../styles/home.module.scss'
import './loadingPage.css';
import Icon from '../images/europe.jpeg';

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

    // const france = artwork.filter((french) => item.place_of_origin === 'Italy')
    // console.log(france);

    const meat = [];

    Europe.forEach((nation) => { 
        const me = artwork.filter((country) => country.place_of_origin === nation)
        if (me.length) {
            meat.push(me);
        }
    })

    console.log(meat);


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

    const prev_page = (pagination.page_number > 1) ? (<Button type='button' onClick={prevPage}>Prev page</Button>) : '';
    const next_page = (pagination.page_number < 9964) ? (<Button type='button' onClick={nextPage}>Next page</Button>) : '';
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
            <h2>loading...</h2>
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
        </section>) : status;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData(page));
    }, [dispatch, page]);

    // const displayArt = artwork.length ? (
    //     <ul className={style.artList}>
    //     {
    //         artwork.map((art, index) => (
    //             <li key={art.id} className={`item${index}`} onClick={()=>navigate('/details', {
    //                 state: {
    //                     object: art,
    //                 },
    //             })}>
    //             <img src={art.image} alt="" />
    //             <div>
    //             <i className="bi bi-arrow-left-circle-fill text-dark" style={{ fontSize: 20 }}></i>
    //             <h5 className="text-dark">{art.title}</h5>
    //             </div>
    //             </li>
    //         ))
    //     }
    //     </ul>
    // ) : (<section>{pageStatus}</section>);

    const list = meat.length ? (
        <ul className={style.artList}>
        {
            meat.map((art, index) => (
                <li key={art.id} className={`item${index}`} onClick={()=>navigate('/details', {
                    state: {
                        object: art,
                    },
                })}>
                <img src={art[0].image} alt="" />
                <div>
                <i className="bi bi-arrow-left-circle-fill text-dark" style={{ fontSize: 20 }}></i>
                <h5 className="text-dark">{art.length}</h5>
                <h5 className="text-dark">{art[0].place_of_origin}</h5>
                </div>
                </li>
            ))
        }
        </ul>
    ) : (<section>{pageStatus}</section>);

    return (
        <>
        <Container className='mt-4'>
        <div className='top'>
        <img src={Icon} alt="" />
        <h1>European Art</h1>
        <h2>{meat.length}</h2>
        </div>
        {list}
        {prev_page}
        {next_page}
        </Container>
        </>
    )
}

export default Home;
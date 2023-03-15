import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchData from "../redux/API";
// import './loadingPage.css';

const BASE_URL = 'https://api.artic.edu/api/v1/artworks?page=1'

const Home = () => {

    const { artwork, status, pagination } = useSelector((store) => store.art);

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

    const prev_page = (pagination.page_number > 1) ? (<button type='button' onClick={prevPage}>Prev page</button>) : '';
    const next_page = (pagination.page_number < 9964) ? (<button type='button' onClick={nextPage}>Next page</button>) : '';
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

    const displayArt = artwork.length ? (
        <ul>
        {
            artwork.map((art) => (
                <li key={art.id}>
                <div>{art.title}</div>
                <img src={art.image} alt="" />
                <button type='button' onClick={()=>navigate('/details', {
                    state: {
                        object: art,
                    },
                })}>
                view details
                </button>
                </li>
            ))
        }
        {prev_page}
        {next_page}
        </ul>
    ) : (<section>{pageStatus}</section>);

    return (
        <div>
        {displayArt}
        </div>
    )
}

export default Home;
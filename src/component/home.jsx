import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchData from "../redux/API";

const Home = () => {

    const { artwork, status, pagination } = useSelector((store) => store.art);

    const [page, setPage] = useState('https://api.artic.edu/api/v1/artworks?page=1&fields=id,title,artist_display,date_display,main_reference_number,api_link,image_id');

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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData(page));
    }, [dispatch, page]);

    const displayArt = artwork.length ? (
        <ul>
        {
            artwork.map((art) => (
                <li key={art.id}>
                <div>{art.id}</div>
                <div>{art.title}</div>
                <div>{art.link}</div>
                <img src={art.image} alt="" />
                <button type='button' onClick={()=>navigate('/details', art.id)}>view details</button>
                </li>
            ))
        }</ul>
    ) : (<p>{status}</p>);

    return (
        <div>
        {displayArt}
        <div>Home page</div>
        <button type='button' onClick={prevPage}>Prev page</button>
        <button type='button' onClick={nextPage}>Next page</button>
        </div>
    )
}

export default Home;
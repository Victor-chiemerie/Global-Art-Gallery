import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from "../redux/API";

const Home = () => {

    const [page, setPage] = useState(1);

    const nextPage = () => {
        if (page < 9964) setPage(page + 1);
    }

    const prevPage = () => {
        if (page > 1)
        setPage(page - 1);
    }

    const { artwork, status } = useSelector((store) => store.art);
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
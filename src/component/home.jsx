import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from "../redux/API";

const Home = () => {
    const { artwork } = useSelector((store) => store.art);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

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
    ) : (<p>there is no book on the shelf</p>);

    return (
        <div>
        {displayArt}
        <div>Home page</div>
        </div>
        
    )
}

export default Home;
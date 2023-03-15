import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchData from "../redux/API";

const Home = () => {

    const BASE_URL = 'https://api.artic.edu/api/v1/artworks?page=1'
    const { artwork, status, pagination } = useSelector((store) => store.art);
    const [page, setPage] = useState(BASE_URL);
    const navigate = useNavigate();
    const nextPage = () => setTimeout(setPage(pagination.next_url), 1000)
    const prevPage = () => setTimeout(setPage(pagination.prev_url), 1000)

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
                        state: { object: art },
                    })}>
                    view details
                    </button>
                    </li>
                ))
            }
        </ul>
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
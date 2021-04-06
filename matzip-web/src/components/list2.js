import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const api_key = "3a3caad63a27e9e03a828a1acbb5ab82";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function ListTwo() {

    const [data, setData] = useState([]);

    const api = axios.create({
        baseURL: BASE_URL
    })

    const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

    useEffect(() => {
        getUpcoming.then((res) => {
            setData(res.data.results);
        })
    }, []);

    return (
        <>
            {data.map((movie) =>
                <Image>
                    <img src={getImage(movie.poster_path)} />
                </Image>
            )}
        </>
    )
}

const Image = styled.div`
    padding: 3px;
`;

export default ListTwo;
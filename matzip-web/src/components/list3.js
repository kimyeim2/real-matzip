import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

// const search = "홍대맛집";
const BASE_URL = "http://whrbdnjs33.asuscomm.com:5432/matzip/?search=홍대맛집";

function ListThree() {

    const [data, setData] = useState([]);

    const api = axios.create({
        baseURL: BASE_URL
    })

    const getFood = api.get(BASE_URL, );
        //"matzip/", { params: { search } });

    useEffect(() => {
        getFood.then((res) => {
            setData(res.data.results);
        })
    }, []);

    return (
        <>
            {data.map((post) =>
                <Image>
                    <img src={post.url} />
                </Image>
            )}
        </>
    )
}

const Image = styled.div`
    width: 300px;
    height: 300px;
    padding: 3px;
`;

export default ListThree;
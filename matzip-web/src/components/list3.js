import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Search from './Search';

function reducer (state, action) {
    switch (action.type) {
        case 'LOADING' :
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function ListThree(props) {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchPosts = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await axios.get(
                `http://whrbdnjs33.asuscomm.com:5432/matzip/?search=${props.keyword}`
            );
            dispatch({ type: 'SUCCESS', data:response.data});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const { loading, data: posts, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (posts && posts.length == 0) return <div>아무것도 없습니다!!</div>
    if (!posts) return null;
    return (
        <>
            {posts.map((post) => post.allowed ?
                <Image>
                    <Item src={post.url} />
                </Image>
                : null
            )}
        </>
    )
}

const Item = styled.img`
    width: 256px;
    height: 256px;
    object-fit: cover;
`;

const Image = styled.div`
    width: 256px;
    height: 256px;
    padding: 3px;
`;

export default ListThree;
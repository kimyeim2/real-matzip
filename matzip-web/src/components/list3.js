import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import axios from "axios";

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

    if (!props.keyword) return <div>검색어를 입력하세요!</div>;
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (posts && posts.length == 0) return <div>아무것도 없습니다!!</div>
    if (!posts) return null;
    return (
        <>
            {posts.map((post) => post.allowed ?
                <Image>
                    <Item 
                    scrolling="no" name="img" 
                    crossorigin="anonymous"
                    src={post.img_url} />
                </Image>
                : null
            )}
        </>
    )
}

const Item = styled.iframe`
    width: 1024px;
    height: 1024px;
    border: 0 none;
    -ms-transform: scale(0.405);
    -moz-transform: scale(0.405);
    -o-transform: scale(0.405);
    -webkit-transform: scale(0.405);
    transform: scale(0.405);
    -ms-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    
`;

const Image = styled.div`
    width: 256px;
    height: 256px;
    padding: 5px;
    overflow: hidden;
`;

export default ListThree;
import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DataService from "../../services/data-service";
import ListItem from "../list-item/ListItem";
import ErrorPage from "../error/Error";
import LoadingPage from "../loading/Loading";

const ListPageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const ListPage = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = new DataService;
        data.sortData(props.type)
            .then((data) => {
                setData(data);
                setLoading(false);
            });

    });

    const gettingData = () => {
        if(data !== null && data !== 'error') {
            let count = 100;
            const markup = data.map((item) => {
                return(<ListItem clickFunc={()=>console.log(item.title)} key={count++} imageLink={item.images['Poster Art'].url} title={item.title} />)
            });
            return markup;
        } else if(data === 'error') {
            return (
              <ErrorPage/>
            );
        }
    };
    if(loading) {
        return (
            <LoadingPage/>
        );
    }
    return(<ListPageWrap>{gettingData()}</ListPageWrap>)
};

export default ListPage;
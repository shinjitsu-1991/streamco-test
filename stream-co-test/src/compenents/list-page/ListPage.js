import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DataService from "../../services/data-service";
import ListItem from "../list-item/ListItem";

const ListPage = (props) => {

    const gettingData = async () => {
        const data = new DataService;
        const dataFiltered = await data.sortData(props.type);
        const markup = await dataFiltered.map((item) => {
            return(<ListItem data={item} />)
        })
        console.log(markup);
        return markup;
    };

    return(<>{gettingData()}</>)
};

export default ListPage;
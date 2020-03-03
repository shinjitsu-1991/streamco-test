import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from "components/ListItem/";
import {ListPageWrap} from "./HomeStyled";
import { Link } from "react-router-dom";

const Home = (props) => {
    const goToPage = () => {

    };

    return(
        <ListPageWrap>
            <Link to="/series"><ListItem clickFunc={()=>goToPage('series')} title="Popular Series" maRight="25px"/></Link>
            <Link to="/movie"><ListItem  clickFunc={()=>goToPage('movie')} title="Popular Movies"/></Link>
        </ListPageWrap>)
};

export default Home;
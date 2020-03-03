import React from 'react';
import ListItem from "components/ListItem/";
import './Home.css';
import {ListPageWrap} from "./HomeStyled";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <ListPageWrap>
            <Link className="category-link" to="/series"><ListItem clickFunc={()=>{}} title="Popular Series" maRight="25px"/></Link>
            <Link className="category-link" to="/movie"><ListItem  clickFunc={()=>{}} title="Popular Movies"/></Link>
        </ListPageWrap>)
};

export default Home;
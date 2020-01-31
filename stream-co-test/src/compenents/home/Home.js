import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ListItem from "../list-item/ListItem";
import { connect } from "react-redux"
import setPageAction from "../../actions/setPage";

const ListPageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const Home = (props) => {
    const goToPage = (page) => {
        return props.setPageFunction(page);
    };

    return(
        <ListPageWrap>
            <ListItem clickFunc={()=>goToPage('series')} title="Popular Series" maRight="25px"/>
            <ListItem  clickFunc={()=>goToPage('movie')} title="Popular Movies"/>
        </ListPageWrap>)
};

function mapStateToProps(state) {
    return {
        page: state.pageInfo.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPageFunction: page => {
            dispatch(setPageAction(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
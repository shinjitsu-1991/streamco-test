import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect } from "react-redux"
import Home from '../home/Home'
import ListPage from "../list-page/ListPage";

const MainContent = styled.div`
    padding:30px 0 130px;
`;

const ContentWrap = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

const Content = (props) => {
    const currentPage = () => {
        switch(props.page){
            case 'series':
                return <ListPage type="series"/>;
            case 'movie':
                return <ListPage type="movie"/>;
            default:
                return <Home />;
        }
    };
    return(

        <MainContent>
            <ContentWrap>
                {currentPage()}
            </ContentWrap>
        </MainContent>
    );
};

function mapStateToProps(state) {
    return {
        page: state.pageInfo.page
    }
}

export default connect(mapStateToProps) (Content);
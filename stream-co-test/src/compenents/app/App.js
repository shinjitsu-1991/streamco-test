import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Content from '../content/Content';
import ErrorBoundaryComponent from "../errorboundary-component/ErrorBoundaryComponent";

const App = () => {
    const MainWrapper = styled.div`
        width: 100%;
        height: 100%;
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    return(
        <MainWrapper>
            <ErrorBoundaryComponent children={<Header/>} />
            <ErrorBoundaryComponent children={<Content/>} />
            <ErrorBoundaryComponent children={<Footer/>} />
        </MainWrapper>
    );
};

export default App;
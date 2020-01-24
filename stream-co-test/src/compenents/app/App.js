import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Content from '../content/Content';

const App = () => {
    const MainWrapper = styled.div`
        width: 100%;
        height: 100%;
        min-width: 100vw;
        min-height: 100vh;
    `;

    return(
        <MainWrapper>
            <Header/>
            <Content/>
            <Footer/>
        </MainWrapper>
    );
};

export default App;
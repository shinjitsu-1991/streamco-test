import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Content from 'components/Content/';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import MainWrapper from './AppStyled';
import ErrorBoundaryComponent from "components/ErrorBoundaryComponent/";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    render() {
        return(
            <MainWrapper>
                <Router>
                    <ErrorBoundaryComponent children={<Header/>} />
                    <Route exact path="/" render={() => <ErrorBoundaryComponent children={<Content page="home"/>} />}/>
                    <Route path="/movie" render={() => <ErrorBoundaryComponent children={<Content page="movie"/>} />}/>
                    <Route path="/series" render={() => <ErrorBoundaryComponent children={<Content page="series"/>} />}/>
                    <ErrorBoundaryComponent children={<Footer/>} />
                </Router>
            </MainWrapper>
        );
    }
};
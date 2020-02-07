import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ErrorPage from "../error/Error";

export default class ErrorBoundaryComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          error: false
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState((prevState) => {
            return({
                error: !prevState.error
            })
        })
    }

    render() {
        if (this.state.error) {
            return (<ErrorPage/>);
        }
        return this.props.children;
    }
}
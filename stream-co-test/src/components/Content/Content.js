import React, { Suspense } from 'react';
import { connect } from "react-redux";
import ErrorPage from "pages/ListPage/";
import LoadingPage from "components/Loading/";
import { MainContent, ContentWrap } from "./ContentStyled";
const Home = React.lazy(() => import("pages/Home/"));
const ListPage = React.lazy(() => import("pages/ListPage/"));



class Content extends React.Component {
    componentDidMount() {
        this.props.onRequestData();
    }

    currentPage = () => {
        if(this.props.page === 'series' || this.props.page === 'movie') {
            return this.getDataForPage();
        } else {
            return <Home />;
        }
    };

    getDataForPage = () => {
        if(this.props.error !== null) {
            return (
                <ErrorPage/>
            );
        }
        if(this.props.fetching) {
            return (
                <LoadingPage/>
            );
        }
        if(this.props.data !== null) {
            const data =  this.props.data['entries'].filter((item) => {
                return (item["programType"] === this.props.page);
            }).slice(0,21);
            return < ListPage data={data} />
        }
    };
    render() {
        return(
            <MainContent>
                <ContentWrap>
                    <Suspense fallback={<LoadingPage/>}>
                        {this.currentPage()}
                    </Suspense>
                </ContentWrap>
            </MainContent>
        );
    }
}

Content.defaultProps = {
    page: ''
};

Content.propsType = {
    page : (props, propName, componentName) => {
        const value = props[propName];
        if(value.isArray()) {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    }
};

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestData: () => dispatch({type:"API_CALL_REQUEST"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
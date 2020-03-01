import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"
import LoadingPage from "components/loading/";
import { MainContent, ContentWrap } from "./ContentStyled";
const Home = React.lazy(() => import("components/home/"));
const ListPage = React.lazy(() => import("components/list-page/"));



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
                <Suspense fallback={<LoadingPage/>}>
                    {currentPage()}
                </Suspense>
            </ContentWrap>
        </MainContent>
    );
};

Content.defaultProps = {
    page: ''
};

Content.propsType = {
    page : (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === 'string') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    }
};

// function mapStateToProps(state) {
//     return {
//         page: state.pageInfo.page
//     }
// }

// export default connect(mapStateToProps) (Content);
export default Content;
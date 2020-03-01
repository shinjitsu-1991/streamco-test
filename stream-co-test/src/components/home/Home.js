import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from "components/list-item/";
import { connect } from "react-redux"
import setPageAction from "actions/setPage";
import {ListPageWrap} from "./HomeStyled";
import { Link } from "react-router-dom";

const Home = (props) => {
    const goToPage = (page) => {
        // return props.setPageFunction(page);
    };

    return(
        <ListPageWrap>
            <Link to="/series"><ListItem clickFunc={()=>goToPage('series')} title="Popular Series" maRight="25px"/></Link>
            <Link to="/movie"><ListItem  clickFunc={()=>goToPage('movie')} title="Popular Movies"/></Link>
        </ListPageWrap>)
};

// function mapStateToProps(state) {
//     return {
//         page: state.pageInfo.page
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         setPageFunction: page => {
//             dispatch(setPageAction(page))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Home);
export default Home;
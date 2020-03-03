import React from 'react';
import ListItem from "components/ListItem/";
import { ListPageWrap } from "./ListPageStyled"

const ListPage = (props) => {
    const gettingData = () => {
        if(props.data !== null && props.data !== undefined) {
            let count = 1;
            return props.data.map((item) => {
                return(<ListItem clickFunc={()=>console.log(item.title)} key={count++} imageLink={item.images['Poster Art'].url} title={item.title} />)
            });
        }
    };
    return(<ListPageWrap>{gettingData()}</ListPageWrap>)
};

ListPage.defaultProps = {
    data: ''
};

ListPage.propsType = {
    data: (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === 'object') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a object`);
    }
}

export default ListPage;
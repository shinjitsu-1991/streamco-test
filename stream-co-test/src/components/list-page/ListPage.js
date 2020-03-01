import React, { useState,useEffect } from 'react';
import DataService from "services/data-service";
import ListItem from "components/list-item/";
import ErrorPage from "components/error/";
import LoadingPage from "components/loading/";
import { ListPageWrap } from "./ListPageStyled"

const ListPage = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = new DataService;
        data.sortData(props.type)
            .then((data) => {
                setData(data);
                setLoading(false);
            });

    });

    const gettingData = () => {
        if(data !== null && data !== 'error') {
            let count = 1;
            const markup = data.map((item) => {
                return(<ListItem clickFunc={()=>console.log(item.title)} key={count++} imageLink={item.images['Poster Art'].url} title={item.title} />)
            });
            return markup;
        } else if(data === 'error') {
            return (
              <ErrorPage/>
            );
        }
    };
    if(loading) {
        return (
            <LoadingPage/>
        );
    }
    return(<ListPageWrap>{gettingData()}</ListPageWrap>)
};

ListPage.defaultProps = {
    type: ''
};

ListPage.propsType = {
    type: (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === 'string') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    }
}

export default ListPage;
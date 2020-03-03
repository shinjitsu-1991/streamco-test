import React from 'react';
import * as ListItemStyled from "./ListItemStyled"

const ListItem = (props) => {
    return(
        <ListItemStyled.ItemWrap maRight={props.maRight} onClick={()=>props.clickFunc()}>
            <ListItemStyled.Item imgSrc={props.imageLink} />
            <ListItemStyled.ItemTitle>{props.title}</ListItemStyled.ItemTitle>
        </ListItemStyled.ItemWrap>
    )
};

ListItem.defaultProps = {
    clickFunc: () => {},
    imageLink: '',
    title: ''
};

ListItem.propsType = {
    maRight: (props, propName, componentName) => {
        if(typeof value === 'string') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    },
    imageLink: (props, propName, componentName) => {
        if(typeof value === 'string') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    },
    title: (props, propName, componentName) => {
        if(typeof value === 'string') {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    },
};

export default ListItem;
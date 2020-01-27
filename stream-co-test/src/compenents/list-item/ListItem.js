import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Item = styled.div``;

const ListItem = (props) => {
    return(
        <Item>{props.title}</Item>
    )
};

export default ListItem;
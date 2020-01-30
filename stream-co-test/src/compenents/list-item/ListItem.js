import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ItemWrap = styled.div`
    width: 135px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    margin-bottom: 45px;
    cursor: pointer;
`;

const Item = styled.div`
    width: 100%;
    height: 200px;
    background: #000;
    background-image: url('${props => props.imgSrc}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ItemTitle = styled.p`
    width: 100%;
    max-width: 100%;
    height: auto;
    color: #000;
    text-decoration: none;
    font-family: Roboto;
    font-size: 14px;
`;

const ListItem = (props) => {
    return(
        <ItemWrap onClick={()=>props.clickFunc()}>
            <Item imgSrc={props.imageLink} />
            <ItemTitle>{props.title}</ItemTitle>
        </ItemWrap>
    )
};

export default ListItem;
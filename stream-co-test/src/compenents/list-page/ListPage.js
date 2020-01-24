import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DataService from '../../services/data-service';

const ListPage = async (props) => {
    const dataServ = new DataService;
    const data = await dataServ.getData()
        .then((data) => {console.log(data.json())});
    return(
        <></>
    );
};

export default ListPage;
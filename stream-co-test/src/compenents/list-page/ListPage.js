import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DataService from "../../services/data-service";

const ListPage = () => {
    const data = new DataService;
    const data1 = data.getData();
    return(<>list-page</>)
};

export default ListPage;
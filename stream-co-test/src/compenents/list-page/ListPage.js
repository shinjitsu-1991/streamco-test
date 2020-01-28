import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DataService from "../../services/data-service";
import ListItem from "../list-item/ListItem";

const ListPageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data:null
        };
    }

    componentDidMount() {
        const data = new DataService;
        const dataFiltered = data.sortData(this.props.type)
            .then((data) => {
                this.setState({
                    data:data
                })
            });

    }

    gettingData = () => {
        if(this.state.data !== null) {
            let count = 100;
            const markup = this.state.data.map((item) => {
                return(<ListItem key={count++} imageLink={item.images['Poster Art'].url} title={item.title} />)
            });
            return markup;
        }
    };
    render() {
        return(<ListPageWrap>{this.gettingData()}</ListPageWrap>)
    }
};
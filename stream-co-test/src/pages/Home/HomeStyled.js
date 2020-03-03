import styled from 'styled-components';

const ListPageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 414px){
        flex-direction: column;
        align-items: center;
    }
`;

export {ListPageWrap};
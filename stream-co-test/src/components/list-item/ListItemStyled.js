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
    margin-right:${props => props.maRight};
    @media screen and (max-width: 414px) {
        margin-right: 0;
    }
`;

const Item = styled.div`
    width: 100%;
    height: 200px;
    background: #000;
    background-image: url('${props => props.imgSrc ? props.imgSrc : process.env.PUBLIC_URL+"/assets/placeholder.jpg"}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: ${props => props.imgSrc ? 'none' : 'brightness(0.5)'};
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

export { ItemTitle, Item, ItemWrap };
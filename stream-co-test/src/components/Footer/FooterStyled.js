import styled from 'styled-components';

const FooterBlock = styled.div`
    width:100%;
    height: auto;
    background-color: #1d1d1d;
    box-sizing: border-box;
    padding: 40px 0 55px;
`;

const FooterBlockWrap = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

const FooterBlockNavi = styled.div`
    color: #9AA5AB;
    font-size: 14px;
`;

const FooterNaviItem = styled.a`
    color: #9AA5AB;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`;

const FooterNaviSeparator = styled.span`
    margin: 0 15px;
`;

const FooterCopyright = styled.p`
    color: #878680;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
`;

const FooterSocialsBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 40px
`;

const FooterSocialsPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`;

const FooterSocialLink = styled.a`
    width: ${props => props.currentWidth};
    height: ${props => props.currentHeight};
    margin-right: ${props => props.marginRight};
    background-image: url('${props => props.imgSrc}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export { FooterSocialLink, FooterSocialsPart, FooterSocialsBlock, FooterCopyright, FooterNaviSeparator, FooterNaviItem, FooterBlockNavi, FooterBlockWrap, FooterBlock };
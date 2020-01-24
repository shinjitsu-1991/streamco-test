import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"
import setPageAction from "../../actions/setPage";
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
`;

const FooterSocialsPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: auto;
`;

const FooterSocialLink = styled.a`
    width: ${props => props.currentWidth};
    height: ${props => props.currentHeight};
    background-image: url('${props => props.imgSrc}');
    background-repeat: no-repeat;
    background-size: contain;
`;

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    goHome = () => {
        return this.props.setPageFunction('series');
    };
    render() {
        return(
            <FooterBlock>
                <FooterBlockWrap>
                    <FooterBlockNavi>
                        <FooterNaviItem onClick={this.goHome}>Home</FooterNaviItem>
                        <FooterNaviSeparator>|</FooterNaviSeparator>
                        <FooterNaviItem>Terms and Conditions</FooterNaviItem>
                        <FooterNaviSeparator>|</FooterNaviSeparator>
                        <FooterNaviItem>Privacy Policy</FooterNaviItem>
                        <FooterNaviSeparator>|</FooterNaviSeparator>
                        <FooterNaviItem>Collection Statement</FooterNaviItem>
                        <FooterNaviSeparator>|</FooterNaviSeparator>
                        <FooterNaviItem>Help</FooterNaviItem>
                        <FooterNaviSeparator>|</FooterNaviSeparator>
                        <FooterNaviItem>Manage Account</FooterNaviItem>
                    </FooterBlockNavi>
                    <FooterCopyright>Copyright &#xa9; DEMO Streaming. All rights reserved.</FooterCopyright>
                    <FooterSocialsBlock>
                        <FooterSocialsPart>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                        </FooterSocialsPart>
                        <FooterSocialsPart>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                            <FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc="./../../../public/assets/social/facebook-white.svg"/>
                        </FooterSocialsPart>
                    </FooterSocialsBlock>
                </FooterBlockWrap>
            </FooterBlock>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.pageInfo.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPageFunction: page => {
            dispatch(setPageAction(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Footer);
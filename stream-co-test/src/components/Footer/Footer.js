import React from 'react';
import * as FooterStyled from './FooterStyled';
import './Footer.css'
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(
            <FooterStyled.FooterBlock>
                <FooterStyled.FooterBlockWrap>
                    <FooterStyled.FooterBlockNavi>
                        <Link className="footer-link" to="/">Home</Link>
                        <FooterStyled.FooterNaviSeparator>|</FooterStyled.FooterNaviSeparator>
                        <FooterStyled.FooterNaviItem>Terms and Conditions</FooterStyled.FooterNaviItem>
                        <FooterStyled.FooterNaviSeparator>|</FooterStyled.FooterNaviSeparator>
                        <FooterStyled.FooterNaviItem>Privacy Policy</FooterStyled.FooterNaviItem>
                        <FooterStyled.FooterNaviSeparator>|</FooterStyled.FooterNaviSeparator>
                        <FooterStyled.FooterNaviItem>Collection Statement</FooterStyled.FooterNaviItem>
                        <FooterStyled.FooterNaviSeparator>|</FooterStyled.FooterNaviSeparator>
                        <FooterStyled.FooterNaviItem>Help</FooterStyled.FooterNaviItem>
                        <FooterStyled.FooterNaviSeparator>|</FooterStyled.FooterNaviSeparator>
                        <FooterStyled.FooterNaviItem>Manage Account</FooterStyled.FooterNaviItem>
                    </FooterStyled.FooterBlockNavi>
                    <FooterStyled.FooterCopyright>Copyright &#xa9; DEMO Streaming. All rights reserved.</FooterStyled.FooterCopyright>
                    <FooterStyled.FooterSocialsBlock>
                        <FooterStyled.FooterSocialsPart>
                            <FooterStyled.FooterSocialLink currentWidth="30px" currentHeight="30px" marginRight="22px" imgSrc={process.env.PUBLIC_URL+"/assets/social/facebook-white.svg"}/>
                            <FooterStyled.FooterSocialLink currentWidth="30px" currentHeight="30px" marginRight="22px" imgSrc={process.env.PUBLIC_URL+"/assets/social/instagram-white.svg"}/>
                            <FooterStyled.FooterSocialLink currentWidth="30px" currentHeight="30px" imgSrc={process.env.PUBLIC_URL+"/assets/social/twitter-white.svg"}/>
                        </FooterStyled.FooterSocialsPart>
                        <FooterStyled.FooterSocialsPart>
                            <FooterStyled.FooterSocialLink currentWidth="135px" currentHeight="40px" marginRight="22px" imgSrc={process.env.PUBLIC_URL+"/assets/store/App-store.svg"}/>
                            <FooterStyled.FooterSocialLink currentWidth="135px" currentHeight="40px" marginRight="22px" imgSrc={process.env.PUBLIC_URL+"/assets/store/play-store.svg"}/>
                            <FooterStyled.FooterSocialLink currentWidth="135px" currentHeight="40px" imgSrc={process.env.PUBLIC_URL+"/assets/store/windows-store.svg"}/>
                        </FooterStyled.FooterSocialsPart>
                    </FooterStyled.FooterSocialsBlock>
                </FooterStyled.FooterBlockWrap>
            </FooterStyled.FooterBlock>
        );
    }
}

export default Footer;
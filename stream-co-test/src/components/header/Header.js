import React from 'react';
import ReactDOM from 'react-dom';
import * as HeaderStyled from "./HeaderStyled"

const Header = () => {

  return(
      <HeaderStyled.HeaderBlock>
        <HeaderStyled.HeaderBlockTop>
            <HeaderStyled.HeaderBlockWrap>
                <HeaderStyled.SiteName>DEMO Streaming</HeaderStyled.SiteName>
                <HeaderStyled.BtnsWrap>
                    <HeaderStyled.LogInBtn>Log In</HeaderStyled.LogInBtn>
                    <HeaderStyled.TrialBtn>Start Your Free Trial</HeaderStyled.TrialBtn>
                </HeaderStyled.BtnsWrap>
            </HeaderStyled.HeaderBlockWrap>
        </HeaderStyled.HeaderBlockTop>
        <HeaderStyled.HeaderBlockBottom>
            <HeaderStyled.HeaderBlockWrap>
                <HeaderStyled.PageName>Popular Titles</HeaderStyled.PageName>
            </HeaderStyled.HeaderBlockWrap>
        </HeaderStyled.HeaderBlockBottom>
      </HeaderStyled.HeaderBlock>
  );
};

export default Header;
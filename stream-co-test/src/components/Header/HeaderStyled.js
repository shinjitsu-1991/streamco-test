import styled from 'styled-components';

const HeaderBlock = styled.div`
    width: 100%;
    height: auto;
  `;
const HeaderBlockTop = styled.div`
    width: 100%;
    height: 60px;
    background-color: #0079fe;
  `;

const HeaderBlockBottom = styled.div`
    width: 100%;
    height: 60px;
    background-color: #414141;
  `;

const HeaderBlockWrap = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

const SiteName = styled.h1`
    color: #fff;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  `;

const PageName = styled.h2`
    color: #fff;
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  `;

const BtnsWrap = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

const LogInBtn = styled.a`
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-right: 30px;
  `;

const TrialBtn = styled.button`
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    border: none;
    background-color: #424242;
    height: 34px;
    width: 150px;
  `;

export { TrialBtn, LogInBtn, BtnsWrap, PageName, SiteName, HeaderBlockWrap, HeaderBlockBottom, HeaderBlockTop, HeaderBlock };
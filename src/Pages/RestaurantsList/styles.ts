import styled from 'styled-components';

import { lightColor } from '../../constants';

export const MainWrapper = styled.div `
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background: rgba(255, 255, 255, .95);
    align-self: flex-end;
    height: 80vh;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 -20px 60px rgba(0, 0, 0, 1);  
    box-sizing: border-box;
    z-index: 10;

    @media (min-width: 920px) {
      border-radius: 0;
      background: white;
      height: 100vh;
      width: 50vw;
      padding: 0 0 0 50px;
      align-items: flex-start;
    }
`;

export const MainSection = styled.div `
  margin-top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 920px) {
    margin-top: 200px;
    display: block;
  }
`;

export const CategoryContainer = styled.div `
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${lightColor};
  margin-bottom: 20px;

  @media (min-width: 920px) {
    margin-bottom: 70px;
  }
`;

export const CategoryMessage = styled.p `
  margin: 0;
  font-size: 14px;

  @media (min-width: 920px) {
    font-size: 16px;
  }
`;

export const Underline = styled.div `
  width: 65px;
  height: 2px;
  background: orange; 

  @media (min-width: 920px) {
    width: 75px;
  }
`;

export const StoresTitle = styled.p `
  margin: 0;
  font-weight: 500;
  font-size: 28px;

  @media (min-width: 920px) {
    font-size: 30px;

  }
`;

export const StoresSubtitle = styled.p `
  margin: 0 0 20px 0;
  color: ${lightColor};
  font-size: 14px;

  @media (min-width: 920px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const StoresContainer = styled.div `
  width: 100%;
  height: 500px;
  overflow: scroll;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 920px) {
    max-height: 1000px;
    margin-top: 30px;
    justify-content: space-between;
    padding: 0;
    overflow: hidden;
  } 
`;

export const SingleStore = styled.div `
  width: 150px;
  cursor: pointer;
  
  @media (min-width: 920px) {
    width: 200px;
  }
`;

export const SingleStoreLogo = styled.img `
  max-width: 140px;
`;

export const SingleStoreName = styled.p `
  margin: 0;
`;

export const SingleStoreAddress = styled.p `
  margin: 0 0 15px 0;
  font-size: 12px;
  color: ${lightColor};
`;

export const SearchBarContainer = styled.div `
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  border: .5px solid ${lightColor};
  border-radius: 12px;
`;

export const SearchBar = styled.input `
  outline: none;
  border: none;
  background: none;
`;

export const NoResultsContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);

  @media (max-width: 920px) {
    margin: -100px 0 0 0;
  }
`;

export const NoResultsMessage = styled.p `
  color: ${lightColor};
  margin: 20px 0 0 0;
`;
import styled from 'styled-components';
import { lightColor, primaryColor } from '../../constants';

export const MainWrapper = styled.div `
  @keyframes swipe-right {
    from { transform: translateX(0) }
    to { transform: translateX(100%) }
  }
  @keyframes swipe-left {
    from { transform: translateX(100%) }
    to { transform: translateX(0) }
  }
  @keyframes swipe-down {
    from { transform: translateY(0) }
    to { transform: translateY(100%) }
  }
  @keyframes swipe-up {
    from { transform: translateY(100%) }
    to { transform: translateY(0) }
  }

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, .95);
  align-self: flex-end;
  height: 80vh;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 1);  
  box-sizing: border-box;
  z-index: 10;
  padding: 20px 0;
  position: relative;
  animation: swipe-up 250ms forwards;
  
  &.hidden {
    animation: swipe-down 250ms forwards;
  }

  @media (min-width: 920px) {
    animation: swipe-left 250ms forwards;
    border-radius: 0;
    background: white;
    height: 100vh;
    width: 50vw;
    
    &.hidden {
      animation: swipe-right 250ms forwards;
    }
  }
`;

export const CardContainer = styled.div `
  width: 100%;
  min-height: 300px;

  @media (min-width: 920px) {
    width: 600px;
    min-height: 400px;
    margin: auto;
    display: flex; 
    justify-content: center;
    perspective: 1000px;
  }
`;


export const Card = styled.div `
  width: 100%;

  @media (min-width: 920px) {
    transform-style: preserve-3d;
    min-height: 400px;
    width: 300px;
    background: white;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .2), 0 0 50px rgba(0, 0, 0, .2);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content:center; 
    align-items: center;
    position: relative;
  }
`;

export const Circle = styled.div `
  position: absolute;
  width: 220px;
  height: 220px;
  background: ${primaryColor};
  border-radius: 50%;
  margin: auto;
  left: 0; right: 0;
  top: 10%;
  z-index: -1;
`;


export const ImgContainer = styled.div `
  display: flex;
  justify-content: center;
`;

export const Info = styled.div `
  display: flex;
  flex-direction: column;
  justify-content:center; 
  align-items: center;  
  z-index: 1000;
`;


export const MainLogo = styled.img `
  margin: auto;
  width: 140px;
  transition: all 250ms ease-out;
  z-index: 1000;

`;

export const StoreName = styled.p `
  margin: 10px 0 10px 0;
  font-size: 30px;
  font-weight: 550;
  transition: all .35s ease-out;
`;

export const StoreAdress = styled.p `
  margin: 0;
  color: ${lightColor};
  transition: all .35s ease-out;
`;

export const StoreDescription = styled.p `
  font-family: 'Montserrat';
  font-weight: 500;
  color: ${lightColor};
  text-align: center;
  font-size: 14px;
  transition: all .35s ease-out;
  margin: 5px 0 0 0;
  width: 90%;

  @media (min-width: 920px) {
    margin: 25px 0 0 0;
    width: 100%;
  }
`;

export const ProductsContainer = styled.div `
  height: 400px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const SingleProduct = styled.div `
  width: 320px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .4);
  cursor: pointer;
`;

export const ProductImg = styled.img `
  width: 150px;
  position: relative;
  z-index: 100;
  cursor: pointer;
`;

export const ProductInfo = styled.div `
  width: 170px;
  background: ${primaryColor};
  display: flex; 
  align-items: center;
  transition: ease-in-out 250ms;
  padding-right: 10px;
  box-sizing: border-box;
`;

export const ProductName = styled.p `
  font-family: 'Montserrat';
  margin: auto  0 auto 20px;
  font-size: 14px;
`;

export const BackIconContainer = styled.div `
  position: absolute;
  top: 3%;
  right: 4%;
  cursor: pointer;
`;

export const SocialMediaContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1000;
  margin-top: 0;

  @media (min-width: 920px) {
    margin-top: 40px;
  }
`;
import styled from 'styled-components';
import { lightColor } from '../../constants';

export const MainWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url('imagebkg.png');
    align-self: flex-end;
    border-radius: 0;
    box-shadow: 0 -20px 60px rgba(0, 0, 0, 1);  
    box-sizing: border-box;
    z-index: 10;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;


    @media (min-width: 920px) {
      border-radius: 0;
      background: url('imagebkg.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100vw;
    }
`;

export const MainContent = styled.section `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 920px) {
    width: 50vw;
    justify-content: flex-start;
  }
`;

export const PizzaContainer = styled.section `
  height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 920px) {
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const PizzaBackground = styled.img `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  width: 60%; height: auto;
  animation: spin 50000ms linear infinite;
  position: absolute;
  margin: auto;
  top: 20%;
  left: 0; right: 0;

  @media (min-width: 350px) and (max-width: 920px) {
    max-width: 600px; 
    max-height: 600px;
    width: 50%; height: auto;
  }

  @media (min-width: 920px) {
    position: relative;
    width: 600px; 
    height: 600px;
    top: 0;
    margin: 0;
  }
`;

export const Card = styled.section `
  @keyframes zoom-in {
    0% { transform: scale(.5); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  width: 80%;
  height: 32%;
  max-width: 400px;
  max-height: 300px;
  min-width: 340px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, .85);
  justify-content: center; 
  align-items: center;
  position: relative;
  animation: zoom-in 350ms forwards;

  @media (min-width: 920px) {
    background: white;
  }
`;


export const UserImageContainer = styled.div `
  width: 110px;
  height: 110px;
  border: 2px solid #323232;
  border-radius: 50%;
  display: flex; 
  justify-content:center; 
  align-items: center;
  overflow: hidden;
  margin: 10px 0 20px 0;
`;

export const UserImage = styled.img `
  background-size: cover;
  
`;

export const UserName = styled.p `
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 550;
`;

export const InputContainer = styled.div `
  width: 30px;
  height: 30px !important;
  border-radius: 50%;
  position: absolute !important;
  top: 20%;
  right: 28%;

  @media (min-width: 920px) {
    top: 15%;
    right: 28%;
  }
`;

export const EmailAdress = styled.p `
  margin: 0;
  color: ${lightColor};
`;

export const EditIconContainer = styled.div `
  position: absolute;
  top: 22%;
  right: 25%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 920px) {
    position: absolute;
    top: 20%;
    right: 28%;
    cursor: pointer;
  }
`;

export const BackIconContainer = styled.div `
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


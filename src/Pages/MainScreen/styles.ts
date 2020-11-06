import styled from 'styled-components';
import { primaryColor, lightColor } from '../../constants';

export const MainWrapper = styled.div `
  width: 100vw !important;
  max-width: 1550px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  display: flex; 
  justify-content: center;
  align-items: center;
  background: url('imagebkg.png');
  background-size: cover;
  box-sizing: border-box;

  @media (min-width: 920px) {
    display: flex;
    justify-content: space-between;
    
  }
`;


export const MainContentLogin = styled.div `
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }
`;


export const BackgroundImageContainer = styled.div `
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  @media (min-width: 920px) {
    width: 50vw;
    position: relative;
    height: 100vh;
  }
`;

export const BackgroundImage = styled.img `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  position: absolute;
  z-index: 1;
  width: 60%; height: auto;
  top: 2%;
  margin: 0 auto;
  right: 0; left: 0;
  animation: spin 50000ms linear infinite;

  @media (min-width: 350px) and (max-width: 920px) {
    max-width: 600px; 
    max-height: 600px;
    width: 50%; height: auto;
  }

  @media (min-width: 920px) {
    width: 600px; 
    height: 600px;
    margin: auto;
    right: 0; left: 0;
    top: 0; bottom: 0;
  }
`;


export const LogoImg = styled.img `
  width: 50%;
  max-width: 200px;
`;

export const BigMessage = styled.p `
  margin: 10px 0;
  font-size: 30px;
`;

export const SmallMessage = styled.p `
  color: ${lightColor};
  margin: 0 0 25px 0;
`;

export const InputContainer = styled.div `
  width: 100%;
  max-width: 300px;
  border: .5px solid ${lightColor};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
  &.main-screen__main-wrapper_main-content_input-container_username {
    margin-bottom: 12px;
  }
`;

export const Input = styled.input `
  outline: none;
  border: none;
  font-size: 15px;
  color: #323232;
  background: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${lightColor};
    font-weight: lighter;
  }
`;

export const Icon = styled.img `
  width: 20px;
`;

export const ForgotPasswordMessage = styled.p `
  font-weight: 600;
  font-size: 12px;
  font-family: 'Montserrat';
  margin: 20px 0;
  cursor: pointer;
`;

export const Button = styled.div `
  background: ${primaryColor};
  width: 300px;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
  border-radius: 3px;
  cursor: pointer;
`;

export const ButtonMessage = styled.p `
  margin: 0;
  font-family: 'Montserrat';
  font-size: 12px;
`;
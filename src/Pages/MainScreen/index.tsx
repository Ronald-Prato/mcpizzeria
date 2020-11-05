import React, { useEffect } from 'react';
import { MainWrapper, BackgroundImage, BackgroundImageContainer, MainContentLogin, ButtonMessage, LogoImg, Button, ForgotPasswordMessage, BigMessage, SmallMessage, Icon, InputContainer, Input } from './styles';

import logo from '../../assets/logo.png';
import backgroundPizza from '../../assets/Pizza.png';
import personIcon from '../../assets/ic_usuario.png';
import lockIcon from '../../assets/ic_password.png';

import { URL } from '../../constants';

const COMP_NAME = 'main-screen';

const MainScreen = () => {
  
  const getInitialJson = () => {
    fetch(URL)
      .then(res => console.log(res))
  };
  useEffect(getInitialJson, []);

  return (
    <MainWrapper className={`${COMP_NAME}__main-wrapper`}>
      <BackgroundImageContainer>
        <BackgroundImage src={backgroundPizza}/>
      </BackgroundImageContainer>
      <MainContentLogin>
        <LogoImg src={logo}/>
        <BigMessage> Bienvenido </BigMessage>
        <SmallMessage> A las mejores pizzas del país </SmallMessage>

        <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_username`}>
          <Input placeholder={'Usuario'}/>
          <Icon src={personIcon}/> 
        </InputContainer>

        <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_password`}>
          <Input type={'password'} placeholder={'Contraseña'}/>
          <Icon src={lockIcon}/> 
        </InputContainer>

        <ForgotPasswordMessage> ¿Olvidaste tu contraseña? </ForgotPasswordMessage>

        <Button>
          <ButtonMessage> Iniciar Sesión </ButtonMessage>
        </Button>
      </MainContentLogin>
    </MainWrapper>
  );
};

export default MainScreen;
import React, { useEffect, useState } from 'react';
import { MainWrapper, BackgroundImage, BackgroundImageContainer, MainContentLogin, ButtonMessage, LogoImg, Button, ForgotPasswordMessage, BigMessage, SmallMessage, Icon, InputContainer, Input } from './styles';

import logo from '../../assets/logo.png';
import backgroundPizza from '../../assets/Pizza.png';
import personIcon from '../../assets/ic_usuario.png';
import lockIcon from '../../assets/ic_password.png';

import API from '../../api.json';

import { Toast } from '../../alerts';
import RestaurantsList from '../RestaurantsList';
import SingleStoreRender from '../SingleStoreRender';

import { SingleStore } from '../RestaurantsList/index.d';

const COMP_NAME = 'main-screen';
let selectedStoreInit: SingleStore;

const MainScreen = () => {
  const users = API.response.users;
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [alertMessage, setAlertMessage] = useState('');
  const [hasLogin, setHasLogin] = useState(false);
  const [showSingleStore, setShowSingleStore] = useState(false);
  const [selectedStore, setSelectedStore] = useState(selectedStoreInit);
  const [hideListClass, setHideListClass] = useState('');

  const checkCurrentSession = () => { // check the session at first render
    if (localStorage.getItem('loggedUser')) {
      setHasLogin(true);
    } else {
      setHasLogin(false);
    }
  };
  useEffect(checkCurrentSession, []);

  const fireAlertMessage = () => { //fires the alert message when this is changed
    alertMessage.length &&
    Toast.fire({
      icon: 'error',
      title: alertMessage
    })
  };
  useEffect(fireAlertMessage, [alertMessage]);
  
  const selectStore = (singleStore: SingleStore) => {
    setHideListClass('hidden');

    setTimeout(() => {
      setSelectedStore(singleStore);
      setShowSingleStore(true);
    }, 250);
  };

  const validators = () => {
    const registeredUserNames = users.map((user) => user.email);
    const currentUserObj = users.filter((user) => user.email === credentials.username)[0];

    if (credentials.username === '' || credentials.password.trim() === '') {
      setAlertMessage('No pueden quedar espacios en blanco');
      return false; 
    } else if (!registeredUserNames.includes(credentials.username)) { //if typed user is not in the json
      setAlertMessage('El usuario no existe');
      return false;
    } else if (credentials.password !== currentUserObj.password) { //if typed user password isn't correct
      setAlertMessage('Contraseña incorrecta');
      return false;    
    }
    return currentUserObj;
  };
  
  const handleLogin = () => {
    const isUser = validators();
    if (isUser) {
      setHasLogin(true);
      Toast.fire({
        icon: 'success',
        title: `Bienvenido ${isUser.name}`
      })
      localStorage.setItem('loggedUser', JSON.stringify(isUser));
    }
  };

  const handleBackToList = () => {
    setHideListClass('showing');

    setTimeout(() => {
      setShowSingleStore(false);
    }, 250);
  }

  return (
    <MainWrapper className={`${COMP_NAME}__main-wrapper`}>
      <BackgroundImageContainer>
        <BackgroundImage src={backgroundPizza}/>
      </BackgroundImageContainer>
      {
        !hasLogin ?
        <MainContentLogin>
          <LogoImg src={logo}/>
          <BigMessage> Bienvenido </BigMessage>
          <SmallMessage> A las mejores pizzas del país </SmallMessage>

          <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_username`}>
            <Input onChange={(event) => setCredentials({...credentials, username: event.target.value.trim()})} value={credentials.username} placeholder={'Usuario (email)'}/>
            <Icon src={personIcon}/> 
          </InputContainer>

          <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_password`}>
            <Input onChange={(event) => setCredentials({...credentials, password: event.target.value})} value={credentials.password} type={'password'} placeholder={'Contraseña'}/>
            <Icon src={lockIcon}/> 
          </InputContainer>

          <ForgotPasswordMessage onClick={() => {
            Toast.fire({
              icon: 'error',
              title: 'Me encantaría comprobar tu cuenta, enviarte un código de verificación y cambiar tu contraseña pero la base de datos en un JSON :\'v'
            })
          }}> ¿Olvidaste tu contraseña? </ForgotPasswordMessage>

          <Button onClick={handleLogin}>
            <ButtonMessage> Iniciar Sesión </ButtonMessage>
          </Button>
        </MainContentLogin>

        : !showSingleStore ? // If a single store is not selected yet
          <RestaurantsList hideListClass={hideListClass} signOut={() => setHasLogin(false)} showSingleStore={(singleStore) => selectStore(singleStore)} stores={API.response.stores}/>
        : // If a single store is selected
        <SingleStoreRender backToList={handleBackToList} store={selectedStore} /> 
      }
    </MainWrapper>
  );
};

export default MainScreen;
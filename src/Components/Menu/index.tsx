import React, { useState } from 'react';

import { MainWrapper, OptionsContainer, SingleOption, ProfileImage, BasicInfo, ProfileImageContainer, Name, OptionName } from './styles';

import { IoMdLogOut, IoIosSettings, IoMdPerson } from 'react-icons/io'; 
import { User } from '../../globalTypes';

import { Link } from 'react-router-dom';

type MenuProps = (props: {
  hideMenu: (key: boolean) => void,
  hideFromParentClass: string,
  signOut: () => void
}) => React.ReactElement; 

const Menu: MenuProps = ({ hideMenu, hideFromParentClass, signOut }) => {

  const [hideMenuClass, setHideMenuClass] = useState('');
  let currentUser: User = JSON.parse(localStorage.getItem('loggedUser') || '');
  const profilePicture = localStorage.getItem(`image-${currentUser.email}`);

  const handleHide = () => {
    setHideMenuClass('hidden');
    hideMenu(false);
  };

  const logOut = () => {
    localStorage.removeItem('loggedUser');
    signOut();
  };

  const settings = () => {
    handleHide();
    
  }

  return (
    <MainWrapper className={`${hideMenuClass} ${hideFromParentClass}`}>

      <BasicInfo>
        <ProfileImageContainer>
          {
            profilePicture ? 
              <ProfileImage src={profilePicture}/>
            :
              <IoMdPerson color={'black'} size={30} />
          }
        </ProfileImageContainer>
        <Name> Bienvenido { currentUser.name } </Name>
      </BasicInfo>

      <OptionsContainer>
        <SingleOption onClick={logOut}>
          <IoMdLogOut size={20}/>
          <OptionName> Cerrar Sesión </OptionName>
        </SingleOption>

        <Link style={{textDecoration: 'none'}} to={'/account-settings'}>
          <SingleOption onClick={settings}>
            <IoIosSettings color={'black'} size={20}/>
            <OptionName> Cuenta </OptionName>
          </SingleOption>
        </Link>
      </OptionsContainer>
    </MainWrapper>
  );
};

export default Menu;
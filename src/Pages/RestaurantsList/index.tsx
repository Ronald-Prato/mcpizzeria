import React, { useState } from 'react';

import { MainWrapper, SearchBarContainer, MainSection, BurgerMenu, ProfilePicture, ShowOpacity, AccountSection, AccountIconContainer, NoResultsContainer, NoResultsMessage, SearchBar, CategoryContainer, CategoryMessage, SingleStoreName, SingleStoreAddress, SingleStoreLogo, SingleStore, Underline, StoresContainer, StoresSubtitle, StoresTitle } from './styles';

import { RestaurantsListProps } from './index.d';

import { IoMdSearch, IoIosHelp, IoMdPerson, IoIosMenu } from 'react-icons/io';
import { primaryColor, lightColor } from '../../constants';
import Menu from '../../Components/Menu';
import { User } from '../../globalTypes';

const RestaurantsList: RestaurantsListProps = ({ stores, showSingleStore, signOut, hideListClass }) => {
  
  const [searchValue, setSearchValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [aniamteOpacityOff, setAnimateOpacittyOf] = useState(false);
  const [hideFromParentClass, setHideFromParentClass] = useState('');
  const currentUser: User = JSON.parse(localStorage.getItem('loggedUser') || '');
  const cachedProfileImage = localStorage.getItem(`image-${currentUser.email}`);

  const handleAnimationTimers = (fromParent: boolean) => {
    fromParent && setHideFromParentClass('hidden');
    setAnimateOpacittyOf(true)
    setTimeout(() => {
      setShowMenu(false);
      setAnimateOpacittyOf(false);
      setHideFromParentClass('');
    }, 300);
  };

  return (
    <MainWrapper className={hideListClass}>
      <AccountSection onClick={() => setShowMenu(!showMenu)}>
        <AccountIconContainer>
          {
            cachedProfileImage ?
            <ProfilePicture src={cachedProfileImage}/>
            :
            <IoMdPerson color={'black'} size={30} />
          }
        </AccountIconContainer>
      </AccountSection>

      <BurgerMenu onClick={() => setShowMenu(!showMenu)}>
        <IoIosMenu color={primaryColor} size={25}/>
      </BurgerMenu>

      { showMenu && <Menu signOut={signOut} hideFromParentClass={hideFromParentClass} hideMenu={(option) => handleAnimationTimers(option)}/> } { /* Conditionally rendering the menu */}

      <MainSection>
        <CategoryContainer>
          <CategoryMessage> Pizzerías </CategoryMessage>
          <Underline />
        </CategoryContainer>

        <StoresTitle> Tiendas </StoresTitle>
        <StoresSubtitle> Escoge tu pizzería favorita </StoresSubtitle>

        <SearchBarContainer>
          <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={'Buscar una pizzería'}/>
          <IoMdSearch size={20}/>
        </SearchBarContainer>
      </MainSection>


      <StoresContainer>
        {
          !searchValue.trim().length ?
          stores.map((store) => 
            <SingleStore onClick={() => showSingleStore(store)} key={store.id}>
              <SingleStoreLogo src={store.logo}/>
              <SingleStoreName> { store.name } </SingleStoreName>
              <SingleStoreAddress> { store.address } </SingleStoreAddress>
            </SingleStore>
          )
          : stores.filter((store) => store.name.toLowerCase().includes(searchValue.trim().toLocaleLowerCase())).length ?
            stores.filter((store) => store.name.toLowerCase().includes(searchValue.trim().toLocaleLowerCase())).map((store) => 
              <SingleStore onClick={() => showSingleStore(store)} key={store.id}>
                <SingleStoreLogo src={store.logo}/>
                <SingleStoreName> { store.name } </SingleStoreName>
                <SingleStoreAddress> { store.address } </SingleStoreAddress>
              </SingleStore>
            )
          :
            <NoResultsContainer>
              <NoResultsMessage> No se ha encontrado la pizzería </NoResultsMessage>
              <IoIosHelp style={{marginTop: '-50px'}} color={lightColor} size={200}/>
            </NoResultsContainer>
        }
      </StoresContainer>

      { showMenu && <ShowOpacity onClick={() => handleAnimationTimers(true)} className={aniamteOpacityOff ? 'start-leaving' : ''}/> }
    </MainWrapper>
  );
};

export default RestaurantsList;
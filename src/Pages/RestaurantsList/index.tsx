import React, { useState } from 'react';

import { MainWrapper, SearchBarContainer, MainSection, NoResultsContainer, NoResultsMessage, SearchBar, CategoryContainer, CategoryMessage, SingleStoreName, SingleStoreAddress, SingleStoreLogo, SingleStore, Underline, StoresContainer, StoresSubtitle, StoresTitle } from './styles';

import { RestaurantsListProps } from './index.d';

import { IoMdSearch, IoIosHelp } from 'react-icons/io';
import { lightColor } from '../../constants';

const RestaurantsList: RestaurantsListProps = ({ stores, showSingleStore }) => {
  
  const [searchValue, setSearchValue] = useState('');

  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default RestaurantsList;
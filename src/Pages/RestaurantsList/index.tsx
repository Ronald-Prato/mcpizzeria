import React from 'react';

import { MainWrapper, CategoryContainer, CategoryMessage, SingleStoreName, SingleStoreAddress, SingleStoreLogo, SingleStore, Underline, StoresContainer, StoresSubtitle, StoresTitle } from './styles';

import { RestaurantsListProps } from './index.d';

const RestaurantsList: RestaurantsListProps = ({ stores, showSingleStore }) => {
  return (
    <MainWrapper>
      <CategoryContainer>
        <CategoryMessage> Pizzerías </CategoryMessage>
        <Underline />
      </CategoryContainer>

      <StoresTitle> Tiendas </StoresTitle>
      <StoresSubtitle> Escoge tu pizzería favorita </StoresSubtitle>

      <StoresContainer>
        {
          stores.map((store) => 
            <SingleStore onClick={() => showSingleStore(store)} key={store.id}>
              <SingleStoreLogo src={store.logo}/>
              <SingleStoreName> { store.name } </SingleStoreName>
              <SingleStoreAddress> { store.address } </SingleStoreAddress>
            </SingleStore>
          )
        }
      </StoresContainer>
    </MainWrapper>
  );
};

export default RestaurantsList;
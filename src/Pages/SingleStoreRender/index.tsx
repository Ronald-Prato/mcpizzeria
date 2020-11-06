import React, { useEffect, useState } from 'react';

import { SingleStore } from '../RestaurantsList/index.d';

import { MainWrapper, MainLogo, StoreName, Card, SocialMediaContainer, ProductInfo, BackIconContainer, Circle, CardContainer, Info, ImgContainer, StoreAdress, ProductName, ProductImg, SingleProduct, StoreDescription, ProductsContainer } from './styles';

import { IoMdArrowBack, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';

type SingleStoreRenderProps = (props: {
  store: SingleStore, 
  backToList: () => void
}) => React.ReactElement;

const SingleStoreRender: SingleStoreRenderProps = ({ store, backToList }) => {

  const [translationClass, setTranslationClass] = useState('translated');
  const [localTransitionClass, setLocalTransitionClass] = useState('');

  useEffect(() => {
    const card: any = document.querySelector('.card');
    const container = document.querySelector('.card-container');
    const logoImg: any = document.querySelector('.store-img');
    const name: any = document.querySelector('.store-name');
    const address: any = document.querySelector('.store-address');
    const description: any = document.querySelector('.store-description');
    const logoInsta: any = document.querySelector('.icon-insta');
    const logoFace: any = document.querySelector('.icon-face');

    const mouseMoveCallback = (e: any) => {
      let xAxys = (window.innerWidth / 2 - e.pageX) / -12;
      let yAxys = (window.innerHeight / 2 - e.pageY) / 10;
      card.style.transform = `rotateY(${xAxys}deg) rotateX(${yAxys}deg)`;
    };

    const mouseEnterCallback = () => {
      card.style.transition = 'none';
      logoImg.style.transform = 'translateZ(60px)';
      name.style.transform = 'translateZ(50px)';
      address.style.transform = 'translateZ(50px)';
      description.style.transform = 'translateZ(50px)';
      logoInsta.style.transform = 'translateZ(50px)';
      logoFace.style.transform = 'translateZ(50px)';
    };

    const mouseLeaveCallback = () => {
      card.style.transition = 'all .5s ease';
      logoInsta.style.transition = 'all .35s ease';
      logoFace.style.transition = 'all .6s ease';

      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      name.style.transform = 'translateZ(0)';
      logoImg.style.transform = 'translateZ(0)';
      address.style.transform = 'translateZ(0)';
      description.style.transform = 'translateZ(0)';
      logoInsta.style.transform = 'translateZ(0)';
      logoFace.style.transform = 'translateZ(0)';
    };

    container?.addEventListener("mousemove", mouseMoveCallback);

    container?.addEventListener("mouseenter", mouseEnterCallback);

    container?.addEventListener("mouseleave", mouseLeaveCallback);

    return () => {
      container?.removeEventListener("mousemove", mouseMoveCallback);
      container?.removeEventListener("mouseenter", mouseEnterCallback);
      container?.removeEventListener("mouseleave", mouseLeaveCallback);
    }
  })

  const handleBackToList = () => {
    setLocalTransitionClass('hidden');

    setTimeout(() => {
      backToList();
    }, 250);
  }

  return (
    <MainWrapper className={`main-wrapper ${localTransitionClass}`}>
      <BackIconContainer className={'back-icon-container'} onClick={handleBackToList}>
        <IoMdArrowBack size={20} />
      </BackIconContainer>
      <CardContainer className={'card-container'}>
        <Card className={'card'}>
          <Circle className={'circle'}/>
          <ImgContainer className={'image-container'}>
            <MainLogo className={'store-img'} src={store.logo}/>
          </ImgContainer>
          <Info className={'info'}>
            <StoreName className={'store-name'}> { store.name } </StoreName>
            <StoreAdress className={'store-address'}> { store.address } </StoreAdress>
            <StoreDescription className={'store-description'}> { store.description } </StoreDescription>
          </Info>

          <SocialMediaContainer className={'social-media-container'}>
            <a className={'icon-insta'} href={store.instagram} target={"blank"}>
              <IoLogoInstagram style={{cursor: 'pointer'}} color={'black'} size={30}/>
            </a>
            <a className={'icon-face'} href={store.facebook} target={"blank"}>
              <IoLogoFacebook style={{cursor: 'pointer'}} color={'black'} size={30}/>
            </a>
          </SocialMediaContainer>
        </Card>
      </CardContainer>

      

      <ProductsContainer className={'products-container'}>
        {
          store.products.map((product) => 
            <SingleProduct className={'single-product'} key={product.id}>
              <ProductImg className={'product-img'} src={product.img}/>
              <ProductInfo className={`product-info ${translationClass}`}>
                <ProductName className={'product-name'}> { product.name } </ProductName>
              </ProductInfo>
            </SingleProduct>
          )
        }
      </ProductsContainer>
    </MainWrapper>
  );
};

export default SingleStoreRender;
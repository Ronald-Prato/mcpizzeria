import React from 'react';

export type SingleStore = {
  id: number,
  name: string,
  logo: string,
  address: string,
  description: string,
  instagram: string,
  facebook: string,
  products: {
    id: number,
    name: string,
    img: string
  }[]
};

export type RestaurantsListProps = (props: {
  showSingleStore: (key: SingleStore) => void,
  stores: SingleStore[],
  signOut: () => void,
  hideListClass: string
}) => React.ReactElement;

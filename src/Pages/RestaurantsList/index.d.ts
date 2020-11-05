import React from 'react';

export type RestaurantsListProps = (props: {
  stores: {
    id: number,
    name: string,
    logo: string,
    address: string,
    description: string,
    products: {
      id: number,
      name: string
    }[];
  }[];
}) => React.ReactElement;

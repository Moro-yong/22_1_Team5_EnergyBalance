import React from 'react';
import { CardList as List } from './CardList';

export const CardList = props => {
  const { data } = props;

  return (
    <div>
      <List data={data} />
    </div>
  );
};

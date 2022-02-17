import React from 'react';
import { Card as Presentational } from './Card';

export const Card = props => {
  const { name, brand } = props;

  return (
    <div>
      <Presentational name={name} brand={brand} />
    </div>
  );
};

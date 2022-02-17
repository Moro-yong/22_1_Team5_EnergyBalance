import React from 'react';
import { Card } from '../../components/card';
import * as S from './style';

export const CardList = props => {
  const { data } = props;
  const countData = data?.splice(1, 16);

  return (
    <S.List>
      {countData?.map(list => {
        const { id, name, brand } = list;
        return (
          <S.CardContainer key={id}>
            <Card id={id} name={name} brand={brand} />
          </S.CardContainer>
        );
      })}
    </S.List>
  );
};

import React from 'react';
import * as S from './style';

export const Card = props => {
  const { name, brand } = props;

  return (
    <S.CardComponent>
      <S.ItemImg src="/images/default_profile.png" alt="제품이미지" />
      <S.ItemMeta>
        <div>
          <S.Name>
            제품명: <S.NameData>{name}</S.NameData>
          </S.Name>
          <S.Brand>브랜드: {brand}</S.Brand>
        </div>
        <S.MoreButton>구성성분 확인하기</S.MoreButton>
      </S.ItemMeta>
    </S.CardComponent>
  );
};

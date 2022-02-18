import React from 'react';
import * as S from './styled';

export function Search(props) {
  const { changeText, changeInputValue, serchValue } = props;

  return (
    <S.SearchContainer>
      <S.Search
        type="text"
        placeholder="원하는 제품을 검색하세요"
        onChange={changeInputValue}
        onKeyDown={serchValue}
        value={changeText}
      />
      <div>
        {TAG_DATA.map(list => {
          const { id, name } = list;
          return (
            <S.Tag id={id} key={id}>
              {name}
            </S.Tag>
          );
        })}
      </div>
    </S.SearchContainer>
  );
}

const TAG_DATA = [
  {
    id: 'tag_1',
    name: '전체',
  },
  {
    id: 'tag_2',
    name: '비타민',
  },
  {
    id: 'tag_3',
    name: '칼슘',
  },
  {
    id: 'tag_4',
    name: '아미노산',
  },
  {
    id: 'tag_5',
    name: '고등어!',
  },
];

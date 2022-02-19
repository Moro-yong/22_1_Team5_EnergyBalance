import React from 'react';
import * as S from './styled';
import { TAG_DATA } from './TAG_DATA';

export function Search(props) {
  const {
    changeText,
    changeInputValue,
    serchValue,
    toggleTag,
    setToggleTag,
    choiceTag,
    setChoiceTag,
    // filterIngredient,
  } = props;
  const toggleTagFilter = [...toggleTag];

  const toggleTagData = e => {
    const EVENT_ID = e.target.id;
    const INDEX = Number(EVENT_ID.substr(4, EVENT_ID.length) - 1);

    toggleTagFilter[INDEX] = !toggleTagFilter[INDEX];
    setToggleTag(toggleTagFilter);
  };

  const findTagData = e => {
    const EVENT_ID = Number(e.target.id.substr(4, e.target.id.length) - 1);
    const EVENT_VALUE = e.target.value;

    if (toggleTagFilter[EVENT_ID] === true) {
      setChoiceTag([...choiceTag, EVENT_VALUE]);
    } else if (toggleTagFilter[EVENT_ID] === false) {
      const deleteTag = [...choiceTag].filter(function (item) {
        return item !== EVENT_VALUE;
      });
      setChoiceTag(deleteTag);
    }
  };

  const resetTagChoice = () => {
    setToggleTag(Array(8).fill(false));
    setChoiceTag([]);
  };

  return (
    <S.SearchContainer>
      <S.Search
        type="text"
        placeholder="원하는 제품을 검색하세요"
        onChange={changeInputValue}
        onKeyDown={serchValue}
        value={changeText}
      />
      <S.TagContainer>
        <S.Tag onClick={resetTagChoice}>리셋</S.Tag>
        <div>
          {TAG_DATA.map(list => {
            const { id, name } = list;
            return (
              <S.Tag
                id={id}
                key={id}
                value={name}
                onClick={e => {
                  toggleTagData(e);
                  findTagData(e);
                  // filterIngredient();
                }}
              >
                {name}
              </S.Tag>
            );
          })}
        </div>
      </S.TagContainer>
    </S.SearchContainer>
  );
}

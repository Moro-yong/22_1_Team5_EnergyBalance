import React, { useState } from 'react';
import { Search as Presentational } from './Search';

export const Search = props => {
  const { setSerchText, toggleTag, setToggleTag, choiceTag, setChoiceTag } =
    props;
  const [changeText, setChangeText] = useState('');

  const changeInputValue = e => {
    setChangeText(e.target.value);
  };

  const serchValue = e => {
    if (e.key === 'Enter') {
      setSerchText(changeText);
      setChangeText('');
    }
  };

  return (
    <div>
      <Presentational
        changeText={changeText}
        changeInputValue={changeInputValue}
        serchValue={serchValue}
        toggleTag={toggleTag}
        setToggleTag={setToggleTag}
        choiceTag={choiceTag}
        setChoiceTag={setChoiceTag}
      />
    </div>
  );
};

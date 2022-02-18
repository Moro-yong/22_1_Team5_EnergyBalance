import React, { useState } from 'react';
import { Search as Presentational } from './Search';

export const Search = ({ setSerchText }) => {
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
      />
    </div>
  );
};

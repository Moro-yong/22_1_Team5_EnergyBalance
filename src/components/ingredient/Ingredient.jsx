import React from 'react';

export const Ingredient = () => {
  return (
    <div>
      {[]?.map((data, index) => {
        const { id, content } = data;
        return (
          <div key={index}>
            <div>{id}</div>
            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
`;
export const CardBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  margin-top: 50px;
  border-radius: 20px;
  background-color: lightgrey;
`;

export const CardBoxImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const CardBoxRightWrap = styled.div`
  padding-left: 15px;
`;

export const ItemName = styled.div``;

export const Brand = styled.div`
  padding-top: 20px;
`;

export const Detail = styled.div`
  padding-top: 20px;
`;

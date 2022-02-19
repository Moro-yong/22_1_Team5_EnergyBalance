import styled from 'styled-components';

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0 40px 0;
`;
export const TagContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const Search = styled.input`
  text-align: center;
  width: 540px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid lightgray;
`;
export const Tag = styled.button`
  border: 1px solid;
  border-color: ${props => (props.color ? '#87cefa' : 'lightgray')};
  border-radius: 4px;
  padding: 6px 10px;
  background: ${props => (props.color ? '#87cefa' : '#f5f5f5')};
  margin: 10px 4px 0 4px;
`;

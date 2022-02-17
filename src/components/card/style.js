import styled from 'styled-components';

export const CardComponent = styled.div`
  display: flex;
`;
export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 4px;
`;
export const ItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
`;
export const NameData = styled.span`
  font-weight: 400;
`;
export const Brand = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
`;
export const BrandData = styled.span`
  font-weight: 400;
`;
export const MoreButton = styled.button`
  display: flex;
  justify-content: start;
  padding: 4px 0;
`;

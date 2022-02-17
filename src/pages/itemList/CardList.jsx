import { Card } from '../../components/card';
import * as S from './style';

export const CardList = props => {
  const { data } = props;

  return (
    <S.List>
      {data?.map(list => {
        const { id, name, brand } = list;

        return (
          <S.CardContainer key={id}>
            <Card name={name} brand={brand} />
          </S.CardContainer>
        );
      })}
    </S.List>
  );
};

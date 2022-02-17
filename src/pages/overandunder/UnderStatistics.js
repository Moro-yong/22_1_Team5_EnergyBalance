import * as S from './UnderStatistics_Style';

export default function UnderStatistics() {
  return (
    <S.UnderWrap>
      <S.Under>미달</S.Under>
      <S.Statistics>
        <S.UnderIngredientBox>
          <S.UnderIngredient>비타민</S.UnderIngredient>
          <S.UnderIngredient>비타민</S.UnderIngredient>
          <S.UnderIngredient>비타민</S.UnderIngredient>
        </S.UnderIngredientBox>
        <S.UnderPercentBox>
          <S.UnderPercent>15/100</S.UnderPercent>
          <S.UnderPercent>15/100</S.UnderPercent>
          <S.UnderPercent>15/100</S.UnderPercent>
        </S.UnderPercentBox>
      </S.Statistics>
    </S.UnderWrap>
  );
}

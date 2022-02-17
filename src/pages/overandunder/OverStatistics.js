import * as S from './OverStatistics_Style';

export default function OverStatistics() {
  return (
    <S.OverWrap>
      <S.Over>초과</S.Over>
      <S.Statistics>
        <S.OverIngredientBox>
          <S.OverIngredient>비타민</S.OverIngredient>
          <S.OverIngredient>비타민</S.OverIngredient>
          <S.OverIngredient>비타민</S.OverIngredient>
        </S.OverIngredientBox>
        <S.OverPercentBox>
          <S.OverPercent>15/100</S.OverPercent>
          <S.OverPercent>15/100</S.OverPercent>
          <S.OverPercent>15/100</S.OverPercent>
        </S.OverPercentBox>
      </S.Statistics>
    </S.OverWrap>
  );
}

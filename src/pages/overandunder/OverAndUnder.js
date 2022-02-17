import * as S from './OverAndUnder_Style';

export default function OverAndUnder() {
  return (
    <S.Countainer>
      <S.OverAndUnderWrap>
        <S.OverWrap>
          <S.Over>초과</S.Over>
        </S.OverWrap>
        <S.UnderWrap>
          <S.Under>미달</S.Under>
        </S.UnderWrap>
      </S.OverAndUnderWrap>
    </S.Countainer>
  );
}

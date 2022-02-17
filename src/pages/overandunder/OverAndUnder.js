import * as S from './OverAndUnder_Style';
import OverStatistics from './OverStatistics';
import UnderStatistics from './UnderStatistics';

export default function OverAndUnder() {
  return (
    <div>
      <S.Countainer>
        <S.OverAndUnderWrap>
          <OverStatistics />
          <UnderStatistics />
        </S.OverAndUnderWrap>
      </S.Countainer>
    </div>
  );
}

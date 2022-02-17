import SearchResult from '../searchresult/SearchResult';
import * as S from './OverAndUnder_Style';
import OverStatistics from './OverStatistics';
import UnderStatistics from './UnderStatistics';

export default function OverAndUnder() {
  return (
    <>
      <S.Countainer>
        <S.OverAndUnderWrap>
          <OverStatistics />
          <UnderStatistics />
        </S.OverAndUnderWrap>
      </S.Countainer>
      <SearchResult />
    </>
  );
}

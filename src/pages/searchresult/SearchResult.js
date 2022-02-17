import CardBox from './CardBox';
import * as S from './SearchResult_Style';

export default function SearchResult() {
  return (
    <S.Container>
      <S.Wrap>
        <S.SearchBox>
          <S.SearchResult>검색결과</S.SearchResult>
        </S.SearchBox>
        <S.CardBoxWrap>
          <CardBox />
        </S.CardBoxWrap>
      </S.Wrap>
    </S.Container>
  );
}

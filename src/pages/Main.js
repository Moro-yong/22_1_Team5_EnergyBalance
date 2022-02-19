import { Search } from './search';
import { CardList } from './itemList/index';
import { useEffect, useState } from 'react';
import OverAndUnder from './overandunder/OverAndUnder';

export default function Main() {
  const [data, setData] = useState([]);
  console.log('데이터 =>', data);
  const [serchText, setSerchText] = useState('');
  console.log('검색내용 =>', serchText);
  const [serchFilterData, setSerchFilterData] = useState(data);
  console.log('검색 필터링 데이터 =>', serchFilterData);
  const [finalData, setFinalData] = useState(data);
  console.log('마지막필터 =>', finalData);
  const [tagFilterData, setTagFilterData] = useState([]);
  console.log('태그 이름영문변환 =>', tagFilterData);
  const [toggleTag, setToggleTag] = useState(Array(8).fill(false));
  console.log('태그 온오프 =>', toggleTag);
  const [choiceTag, setChoiceTag] = useState([]);
  console.log('태그 이름 =>', choiceTag);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res.splice(0, 16)));
  }, []);

  useEffect(() => {
    const filterUpperCase = data.filter(content =>
      content.name.toUpperCase().includes(serchText.toUpperCase())
    );
    setSerchFilterData(filterUpperCase);
  }, [serchText, data]);

  useEffect(() => {
    const newChoiceTag = [...choiceTag];

    if (newChoiceTag.includes('철분')) {
      const INDEX = newChoiceTag.indexOf('철분');
      newChoiceTag[INDEX] = 'iron';
    }
    if (newChoiceTag.includes('칼슘')) {
      const INDEX = newChoiceTag.indexOf('칼슘');
      newChoiceTag[INDEX] = 'calcium';
    }
    if (newChoiceTag.includes('단백질')) {
      const INDEX = newChoiceTag.indexOf('단백질');
      newChoiceTag[INDEX] = 'protein';
    }
    if (newChoiceTag.includes('아연')) {
      const INDEX = newChoiceTag.indexOf('아연');
      newChoiceTag[INDEX] = 'cooper';
    }
    if (newChoiceTag.includes('비타민A')) {
      const INDEX = newChoiceTag.indexOf('비타민A');
      newChoiceTag[INDEX] = 'vitaminA';
    }
    if (newChoiceTag.includes('비타민B')) {
      const INDEX = newChoiceTag.indexOf('비타민B');
      newChoiceTag[INDEX] = 'vitaminB';
    }
    if (newChoiceTag.includes('비타민E')) {
      const INDEX = newChoiceTag.indexOf('비타민E');
      newChoiceTag[INDEX] = 'vitaminE';
    }
    if (newChoiceTag.includes('지방')) {
      const INDEX = newChoiceTag.indexOf('지방');
      newChoiceTag[INDEX] = 'fat';
    }

    setTagFilterData(newChoiceTag);
  }, [choiceTag]);
  // console.log(Object.keys(data[1]?.ingredient).includes('iron'));

  // 성분표가 있는 데이터만 선택
  // // console.log('성분표가 있는 데이터 =>', newData);
  useEffect(() => {
    const newData = serchFilterData.filter(x => x.ingredient);
    console.log(newData);
    const findTagIndex = newData.map(list =>
      list.ingredient.map(
        data => data.name === tagFilterData[0] && data.percent > 0
      )
    );

    const newFindTagIndex = findTagIndex.map(list => list.indexOf(true));

    const saveFindTagData = [];
    console.log(saveFindTagData);
    for (let i = 0; newFindTagIndex.length >= i; i++) {
      if (newFindTagIndex[i] >= 0) {
        saveFindTagData.push(newData[i]);
      }
    }
    setFinalData(saveFindTagData);
  }, [tagFilterData, serchFilterData]);

  return (
    <div>
      {/* <div onClick={filterIngredient}>aaa</div> */}
      <Search
        setSerchText={setSerchText}
        toggleTag={toggleTag}
        setToggleTag={setToggleTag}
        choiceTag={choiceTag}
        setChoiceTag={setChoiceTag}
        // filterIngredient={filterIngredient}
      />
      <OverAndUnder />
      <CardList data={finalData} />
    </div>
  );
}

import { Search } from './search';
import { CardList } from './itemList/index';
import { useEffect, useState } from 'react';
import OverAndUnder from './overandunder/OverAndUnder';

export default function Main() {
  const [data, setData] = useState([]);
  // console.log('데이터 =>', data);
  const [serchFilterData, setSerchFilterData] = useState(data);
  // console.log('필터링 데이터 =>', serchFilterData);
  const [finalData, setFinalData] = useState(data);
  // console.log('마지막필터 =>', finalData);
  const [tagFilterData, setTagFilterData] = useState([]);
  console.log('태그 이름영문변환 =>', tagFilterData);
  const [serchText, setSerchText] = useState('');
  // console.log('검색내용 =>', serchText);
  // const [toggleTag, setToggleTag] = useState(Array(9).fill(false));
  // console.log('태그 온오프 =>', toggleTag);
  const [toggleTag, setToggleTag] = useState(Array(9).fill(false));
  // console.log('태그 온오프 =>', toggleTag);
  const [choiceTag, setChoiceTag] = useState([]);
  // console.log('태그 이름 =>', choiceTag);

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

  // const finalData22 = data.filter(dataList =>
  //   Object.key(dataList.ingredient).includes('iron')
  // );

  // console.log(finalData22);

  // useEffect(() => {
  //   // 성분표가 있는 데이터만 선택
  //   const newData = data.filter(x => x.ingredient);
  //   // console.log(newData);

  //   // 성분표에 있는지 없는지 확인
  //   // const newArr = newData.map(list => {
  //   //   for (let i = 0; tagFilterData.length >= i; i++) {
  //   //     Object.keys(list.ingredient).includes(tagFilterData[i]);
  //   //   }
  //   // });
  //   // console.log(newArr);

  //   // 성분표만 분류하여 배열로 생성
  //   const newArr = newData.map(list => Object.keys(list.ingredient));
  //   // console.log(newArr);

  //   // 성분표에 태그가 포함되는지
  //   // const final = () => {
  //   //   newArr
  //   // };
  //   // console.log(final);

  //   setFinalData();
  // }, [data]);

  // // let array = [0, 1, 2, 3, 4]; //tags
  // // console.log(
  // //   array.some(function (elem) {
  // //     return elem === 0;
  // //   })
  // // );

  return (
    <div>
      <Search
        setSerchText={setSerchText}
        toggleTag={toggleTag}
        setToggleTag={setToggleTag}
        choiceTag={choiceTag}
        setChoiceTag={setChoiceTag}
      />
      <OverAndUnder />
      <CardList data={serchFilterData} />
    </div>
  );
}

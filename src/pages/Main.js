import { Search } from './search';
import { CardList } from './itemList/index';
import { useEffect, useState } from 'react';
import OverAndUnder from './overandunder/OverAndUnder';

export default function Main() {
  const [data, setData] = useState([]);
  const [serchFilterData, setSerchFilterData] = useState([]);
  const [serchText, setSerchText] = useState('');

  console.log('데이터 =>', data);
  console.log('필터링 데이터 =>', serchFilterData);
  console.log('검색내용 =>', serchText);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res.splice(0, 16)));
  }, []);

  useEffect(() => {
    const filterUpperCase = data.filter(content =>
      content.name.toUpperCase().includes(serchText.toUpperCase())
    );
    console.log('필터 데이터 =>', filterUpperCase);

    setSerchFilterData(filterUpperCase);
  }, [serchText, data]);

  return (
    <div>
      <Search setSerchText={setSerchText} />
      <OverAndUnder />
      <CardList data={data} />
    </div>
  );
}

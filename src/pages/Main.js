import { Search } from './search';
import { CardList } from './itemList/index';
import { useEffect, useState } from 'react';
import OverAndUnder from './overandunder/OverAndUnder';

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div>
      <Search />
      <OverAndUnder />
      <CardList data={data} />
    </div>
  );
}

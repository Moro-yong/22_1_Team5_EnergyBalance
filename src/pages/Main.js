import { Search } from './search';
import { CardList } from './itemList/index';
import { useEffect, useState } from 'react';

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res.splice(0, 16)));
  }, []);

  return (
    <div>
      <Search />
      <CardList data={data} />
    </div>
  );
}

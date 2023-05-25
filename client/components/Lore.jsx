import React, { useState } from 'react';
import LoreInput from './LoreInput.jsx';
import LoreOutput from './LoreOutput.jsx';

const Lore = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [api, setApi] = useState([]);
  const [data, setData] = useState({});

  return (
    <div className="lore">
      <h1>FFXIV LORE!!</h1>
      <LoreInput query={query} setQuery={setQuery} pageNum={pageNum} setPageNum={setPageNum} setApi={setApi} data={data} setData={setData} />
      <LoreOutput api={api} />
    </div>
  );
};

export default Lore;

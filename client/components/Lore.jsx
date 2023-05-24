import React, { useState } from 'react';
import LoreInput from './LoreInput.jsx';
import LoreOutput from './LoreOutput.jsx';

const Lore = () => {
  // state here? pass down to children?
  // what state do I need?
  const [ query, setQuery ] = useState();

  return (
    <div className="lore">
      <h1>FFXIV LORE!!</h1>
      <LoreInput setQuery={setQuery}/>
      <LoreOutput query={query}/>
    </div>
  );
};

export default Lore;

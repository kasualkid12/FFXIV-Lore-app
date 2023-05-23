import React, { useState } from 'react';
import LoreInput from './LoreInput.jsx';
import LoreOutput from './LoreOutput.jsx';

const Lore = () => {
  return (
    <div className="lore">
      <h1>This is a test!</h1>
      <LoreInput />
      <LoreOutput />
    </div>
  );
};

export default Lore;

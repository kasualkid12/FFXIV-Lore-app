import React from 'react';
import LoreItem from './LoreItem.jsx'

const LoreOutput = (props) => {
  return (
    <div className="loreOutput">
      {props.api.map((el, i) => {
        return <LoreItem key={`key${i}`} api={props.api[i]}/>
      })}
    </div>
  );
};

export default LoreOutput;

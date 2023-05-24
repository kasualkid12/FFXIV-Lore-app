import React, { useEffect } from 'react';

const LoreInput = (props) => {

  // useEffect(async () => {
  //   const response = await fetch('/api');
  //   const data = await response.json();
  //   console.log(data);
  //   props.setData(data);
  //   return
  // }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
    props.setData(data);

    console.log(Array.isArray(data.Results))

    props.setApi(data.Results);
    props.setQuery('')
  };

  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          Query:
          <input type="text" value={props.query} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default LoreInput;

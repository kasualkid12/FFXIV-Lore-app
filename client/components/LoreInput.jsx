import React, { useEffect } from 'react';

const LoreInput = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    props.setPageNum(1)

    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: props.query, pageNum: props.pageNum }),
    });

    const data = await response.json();
    props.setData(data);

    props.setApi(data.Results);
    props.setQuery('');
  };

  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          Query:
          <input
            type="text"
            className="queryInput"
            value={props.query}
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          className="queryButton"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
      <div className='navButtons'>
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
    </div>
  );
};

export default LoreInput;

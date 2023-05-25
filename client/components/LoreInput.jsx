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

    props.setMaxPage(data.Pagination.PageTotal)
    props.setApi(data.Results);
  };

  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  const handleNextPage = async () => {
    if (props.pageNum < props.maxPage) {
      
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: props.query, pageNum: props.pageNum + 1}),
      });
      
      const data = await response.json();
      props.setData(data);
      props.setApi(data.Results);
      props.setPageNum(props.pageNum + 1);
    }
  }

  const handlePreviousPage = async () => {
    if (props.pageNum > 1) {
      
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: props.query, pageNum: props.pageNum - 1}),
      });
      
      const data = await response.json();
      props.setData(data);
      props.setApi(data.Results);
      props.setPageNum(props.pageNum - 1);
    }
  }

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
        <button onClick={handlePreviousPage}>Previous Page</button>
        <p>{props.pageNum} / {props.maxPage}</p>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default LoreInput;

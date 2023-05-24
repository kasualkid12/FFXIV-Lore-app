import React from "react";

const LoreInput = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault
  }

  const handleChange = (e) => {
    props.setQuery(e.target.value)
  }

  return <div>
    <form>
      <label onSubmit={handleSubmit}>
        Query:
        <input type="text" onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
}

export default LoreInput;
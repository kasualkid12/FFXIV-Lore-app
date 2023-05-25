import React from "react";

const LoreItem = (props) => {

  const { Data, Text } = props.api
  let data;


  Data === null ? data = 'N/A' : data = {...Data}

  console.log(data)

  return <div className="loreItem">
    <p>Name: {data.Name}</p>
    <p>Description: {Text}</p>
  </div>
}

export default LoreItem;
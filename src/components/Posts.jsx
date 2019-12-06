import React from "react";

const Posts = ({ resource, handleClick }) => {
  const items = resource.read();
  return (
    <>
      <ul style={{height: '300px', overflow: 'scroll'}}>
        {items.map(({ title, id }) => (
          <li key={id} onClick={() => handleClick(id)}>
            {title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts

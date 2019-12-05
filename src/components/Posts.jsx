import React from "react";
import { Link } from "react-router-dom";

const Section = ({ resource }) => {
  const items = resource.read();
  return (
    <ul>
      {items.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/post/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Section;

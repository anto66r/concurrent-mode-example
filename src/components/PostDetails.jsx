import React from "react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Link to="/">Back</Link>
      <h1>{id}</h1>
    </>
  );
};

export default PostDetails;

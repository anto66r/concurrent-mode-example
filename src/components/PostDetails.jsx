import React from "react";

const PostDetails = ({ resource, postId }) => {
  console.log('postDetails', postId, resource)
  const details = resource.read()
  return (
    <>
      <h1>{details.title}</h1>
      <p>{details.body}</p>
    </>
  );
};

export default PostDetails;

import React, { Suspense, useState, useEffect } from "react";
import { postsResource, postDetailsResource } from "./fakeApi";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";

const postListResource = postsResource()

function App() {
  const [postId, setPostId] = useState()
  const [detailResource, setDetailResource] = useState()
  useEffect(() => {
    console.log('useEffect', postId)
    setDetailResource(postDetailsResource(postId))
  }, [postId])
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Posts resource={postListResource} handleClick={setPostId} />
        {postId ? (
          <Suspense fallback={<h1>Loading details...</h1>}>
            <button onClick={() => setPostId()}>Reset</button>
            <PostDetails resource={detailResource} postId={postId} />
          </Suspense>
        ) : (
          <h2>Click on a post</h2>
            )}
      </Suspense>
    </>
  )
}
export default App

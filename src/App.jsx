import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import createResource from "./fakeApi";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";

const initialResource = createResource();
function App() {
  // const [resource] = React.useState(initialResource)
  return (
    <Router>
      <Switch>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
        <Route path="/">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Posts resource={initialResource.posts} />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

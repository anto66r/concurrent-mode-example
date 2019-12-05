import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import createResource from "./fakeApi";
import Post from "./components/post";
import Section from "./components/section";

const initialResource = createResource();
function App() {
  // const [resource] = React.useState(initialResource)
  return (
    <Router>
      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Section component={Post} resource={initialResource.posts} />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

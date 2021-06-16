import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import PostInfo from './components/PostInfo/PostInfo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/postDetails">
          <PostDetails></PostDetails>
        </Route>
        <Route path="/postInfo/:id">
          <PostInfo></PostInfo>
        </Route>
        <Route path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

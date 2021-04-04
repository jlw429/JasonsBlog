import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

//line 3 comes from the router-dom
function App() {
  return (
    <Router>
      {/* [router is used around entire application] */}
      <div className='App'>
        <Navbar />
        {/* navbar is on all pages, does not get wrapped in switch. */}
        <div className='content'>
          <Switch>
            {/* [page content goes here, called Route] */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
              {/* //shows home inside the  */}
              {/* [path after route of website] */}
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
              </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router> //see line 7
  );
}

export default App;

import React,{Component} from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './App'
import About from './about';
import NoMatch from './nomatch';
import Home from './home';
import Contact from './contact';
import Portfolio from './portfolio';
import Blog from './blog';

class MyRouter extends Component{
  render (){
    return(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about_me" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="blog" component={Blog}/>
      <Route path="portfolio" component={Portfolio}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
)
}
}
export default MyRouter;

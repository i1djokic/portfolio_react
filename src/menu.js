import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router'
import './menu.css'
class Menu extends Component {
  render() {
    return (
      <div>
        <div className="slova">
          <IndexLink to="/"       className="slova"    activeStyle={{color:"white"}}><i className="fa fa-home fa-2x">Home  </i></IndexLink>
          &nbsp; &nbsp; &nbsp;
          <Link      to="/portfolio"     className="slova"      activeStyle={{color:"grey"}}><i className="fa fa-book fa-2x"> Portfolio  </i></Link>
          &nbsp; &nbsp; &nbsp;
          <Link      to="/blog"     className="slova"      activeStyle={{color:"grey"}}><i className="fa fa-podcast fa-2x"> Blog  </i></Link>
          &nbsp; &nbsp; &nbsp;
          <Link      to="/about_me"     className="slova"      activeStyle={{color:"brown"}}><i className="fa fa-address-card-o fa-2x">  About </i></Link>
          &nbsp; &nbsp; &nbsp;
          <Link      to="/contact"     className="slova"      activeStyle={{color:"green"}}><i className="fa fa-envelope-o fa-2x"> Contact</i></Link>

        </div>
      </div>
    )
  }
}
export default Menu;

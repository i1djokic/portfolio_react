import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div><h3>About me:</h3>
        <div><h3>You can follow me on:</h3></div>
        <br></br>
        <div><a href="https://facebook.com/sharky023"><i className="fa fa-facebook fa-3x">   Facebook    </i></a></div>
        <br></br>
        <div><a href="https://twitter.com/i1sharky"><i className="fa fa-twitter fa-3x">    Twitter   </i></a></div>
        <br></br>
        <div><a href="https://telegram.me/sharkinternet"><i className="fa fa-telegram fa-3x">    Telegram    </i></a></div>
        <br></br>

      <div>Or you can visi my official site: <a href="http://www.shark-inter.net">shark-inter.net</a></div>

      </div>


    )
  }
}
export default About;

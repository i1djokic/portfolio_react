import React, { Component } from 'react';
import Pics from './pics'

class Home extends Component {
  render() {

    return (
      <div><h1>Welcome :)</h1>
        <br></br>
        <div><b>Things that I support, share and love:</b></div>
          <br></br>

        <Pics></Pics>

      </div>
    )
  }
}
export default Home;

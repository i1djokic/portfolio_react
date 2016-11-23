import React, { Component } from 'react';
import vepar from './vepar.svg';
import './App.css';
import Test from './test';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import Proba from './Proba';
import Menu from './menu';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={vepar} className="App-logo" alt="logo" />
            <Menu></Menu>

        </div>
          {this.props.children}

      </div>
    );
  }



}

export default App;

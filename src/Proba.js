import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Proba extends Component {
  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Optional description...',
        srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];

  return (
    <ImageGallery
      ref={i => this._imageGallery = i}
      items={images}
      slideInterval={2000}
      onImageLoad={this.handleImageLoad}
    />
  )}
}
export default Proba;

import React, { Component } from 'react';
class ImageDisplay extends Component{
  render(){
    const images = this.props.images.map(image =>{
      return (<div key={image.id}>
      <img src={image.img_src} alt="space img" />
      </div>
    )
    })
    return(
    <div>
      {images}
    </div>
    )
  }
}

export default ImageDisplay;

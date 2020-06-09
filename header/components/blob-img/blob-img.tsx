import { Component, ComponentInterface,h } from '@stencil/core';

@Component({
  tag: 'blob-img',
  styleUrl: 'blob-img.css',
  shadow: true,
  assetsDirs: ["/assets"]

})
export class BlobImg implements ComponentInterface {

  render() {
    return(
    <img src= "assets/bolla.png">

    </img>
    )
    
  }

}

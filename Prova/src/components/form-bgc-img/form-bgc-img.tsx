import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'form-bgc-img',
  styleUrl: 'form-bgc-img.scss',
  shadow: true,
  assetsDirs: ["/assets"]
})
export class MyNameImg implements ComponentInterface {
/* 
  form which contains both bgc-img-form-component and the form-component
*/
  render(){
    return (
    <div class="bgc-img">
      <div class="overlay"></div>
      <form-component></form-component>
    </div>
    )
  }
}

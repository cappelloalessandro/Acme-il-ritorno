import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'form-wrapper',
  styleUrl: 'form-wrapper.scss',
  shadow: true,
})
export class MyNameWrapper implements ComponentInterface {
  /* 
     wrapper which contains all form-components
  */
  render() {
    return (
    <div class="wrapper">
      <h1>Contattaci</h1>
      <form-bgc-img></form-bgc-img>
    </div>
    );
  }
  

}

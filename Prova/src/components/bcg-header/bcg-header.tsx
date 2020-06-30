import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bcg-header',
  styleUrl: 'bcg-header.css',
  shadow: true,
})
export class BcgHeader implements ComponentInterface {

  render() {
    return (
    <div class="blu">
     
        <txt-header></txt-header>
   
    </div>
    
);
  }

}

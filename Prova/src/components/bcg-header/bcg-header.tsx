import { Component, ComponentInterface, h } from '@stencil/core';
/**
 * header component
 * @author Andrea Lepori
 */
@Component({
  tag: 'bcg-header',
  styleUrl: 'bcg-header.scss',
  shadow: true,
})
export class BcgHeader implements ComponentInterface {

  /**
   * header container
   * .blu is bcg img of component
   */
  render() {
    return (
    <div class="blu">
     
        <txt-header></txt-header>
   
    </div>
    
);
  }

}

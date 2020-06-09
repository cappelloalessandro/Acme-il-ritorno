import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'contenitore-flex',
  styleUrl: 'contenitore-flex.css',
  shadow: true,
})
export class ContenitoreFlex implements ComponentInterface {

  render() {
    return (
      <div>
        <div class="flex">
          <car-card></car-card>
          <healt-card></healt-card>
          <house-card></house-card>
        </div>
        <div class="flex">
          <money-card></money-card>
          <travel-card></travel-card>
          <umbrella-card></umbrella-card>
        </div>
      </div>
    );
  }

}

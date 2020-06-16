import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'banner-app',
  styleUrl: 'banner-app.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class BannerApp implements ComponentInterface {

  render() {
    return (
      <div class="app grid col-2">
        <div>
          <img src="/assets/telefono-app.png" alt=""/>
        </div>
        <div>
          <h2>I tuoi documenti, in un unica app, comodamente nella tua tasca! </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa laborum ducimus. Voluptatum nisi corporis deserunt nulla facere reprehenderit iure non id, accusamus quisquam aperiam distinctio totam obcaecati dicta ab?</p>
        </div>
      </div>
    );
  }

}

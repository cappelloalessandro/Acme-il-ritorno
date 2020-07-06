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
          <h2>Le tue Assicurazioni, in un unica app, comodamente alla portata di click! </h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa laborum ducimus. Voluptatum nisi corporis deserunt nulla facere reprehenderit iure non id, accusamus quisquam aperiam distinctio totam obcaecati dicta ab?</p> */}
          <a href="javascript:void(0)"><b>Scarica la nostra app!</b></a>
        </div>
      </div>
    );
  }

}

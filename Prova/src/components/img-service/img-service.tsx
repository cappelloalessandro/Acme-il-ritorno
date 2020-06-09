import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'img-service',
  styleUrl: 'img-service.css',
  shadow: true,
  assetsDirs:["/assets"],

})
export class ImgService implements ComponentInterface {

  render() {
    return (
      <div>
        <div class="flex">
        <div class="col-1">
          <img class="insurance-pack" src="/assets/pack.png"></img>
        </div>
        <div class="col-2">
          <h4 class="title">Titolo Del Paragrafo</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis, ducimus possimus officiis voluptatibus alias rerum? Ipsum tempore minima deleniti modi placeat atque tenetur voluptate. Dolores vero at quae tempora explicabo animi similique, doloremque assumenda numquam temporibus quam molestiae amet!</p>  
        </div>
      </div>  

      </div>
    );
  }

}

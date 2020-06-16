import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'banner-certezze',
  styleUrl: 'banner-certezze.css',
  shadow: true,
})
export class BannerCertezze implements ComponentInterface {

  render() {
    return (
     <div class="grid col-4">
       <article>
          <img class="icona" src="/assets/time.png" alt="prova"/>
          <h5>Disponibilità</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad!</p>
       </article>
       <article>
          <img class="icona" src="/assets/app.png" alt="prova"/>
          <h5>Disponibilità</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad!</p>
       </article>
       <article>
          <img class="icona" src="/assets/privati.png" alt="prova"/>
          <h5>Disponibilità</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad!</p>
       </article>
       <article>
          <img class="icona" src="/assets/app.png" alt="prova"/>
          <h5>Disponibilità</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad!</p>
       </article>
     </div>
    );
  }

}

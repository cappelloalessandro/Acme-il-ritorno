import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'content-features',
  styleUrl: 'content-features.css',
  shadow: true,
})
export class ContentFeatures implements ComponentInterface {

  render() {
    return (
     <div class="feature">
       <div class="flex">
          <div class="motto">
              <h4>La tua polizza oggi è su misura per te!</h4>
              <h2>Innovativa, Sicura, Veloce!</h2>
          </div>
          <div class="sottotitolo">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, tenetur? Ullam nihil fugiat culpa error magnam, dolores recusandae, facere saepe asperiores ducimus tenetur neque molestias dicta quaerat aut velit non?</p>
          </div>
        </div>




       <div class="grid col-4">
          <mini-card
          titoletto="sempre con te, con la nostra App!"
          spiegazione="lorem ipsum di circa 15 paroline"
          continua="Scopri l'App">     
          </mini-card>

          <mini-card
          titoletto="Assistenza Privati Dedicata"
          spiegazione="lorem ipsum di circa 15 paroline"
          continua="Scarica l'app!">     
          </mini-card>

          <mini-card
          titoletto="Assistenza Aziende Dedicata"
          spiegazione="lorem ipsum di circa 15 paroline"
          continua="Continua di qua!">     
          </mini-card>

          <mini-card
          titoletto="Scopri le nostre assicurazioni"
          spiegazione="lorem ipsum di circa 15 paroline"
          continua="Guardami!">     
          </mini-card>

       </div>
     </div>
    );
  }

}

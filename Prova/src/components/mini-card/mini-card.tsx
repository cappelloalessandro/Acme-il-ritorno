import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mini-card',
  styleUrl: 'mini-card.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MiniCard implements ComponentInterface {

// @Prop() immagine: string;
@Prop() titoletto: string;
@Prop() spiegazione: string;
@Prop() continua: string;
    render() {
      return (
        <div class="cardcontainer"> 
          {/* <img src="{this.image}" alt=""/> */}
          {/* <img src={getAssetPath(`./assets/${this.imageCar}`)}></img> */}
          {/* <img src="{this.icona}"></img> */}
          <img src="/assets/applicazione.png"></img> 
          <h3>{this.titoletto}</h3>
          <p>{this.spiegazione}</p>
          <a href="javascript:void(0)" class="link">{this.continua}</a>      
        </div>    
        );
    }
  
  }
  
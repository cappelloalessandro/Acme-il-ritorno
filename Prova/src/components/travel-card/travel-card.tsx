import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'travel-card',
  styleUrl: 'travel-card.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class TravelCard implements ComponentInterface {

  render() {
      return (
        <div class="cardcontainer">
          <img class="travel" src="/assets/viaggi-insurance.png"></img>
          <h3 class="title"> Assicurazione Viaggi</h3>
          <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
          <a class="btn">scopri di più!</a>      
        </div>
    );
  }

}

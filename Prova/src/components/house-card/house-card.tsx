import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'house-card',
  styleUrl: 'house-card.css',
  shadow: true,
  assetsDirs:["/assets"],

})
export class HouseCard implements ComponentInterface {

  render() {
      return (
        <div class="cardcontainer">
          <img class="home" src="/assets/home-insurance.png"></img>
          <h3 class="title"> Assicurazione per la casa</h3>
          <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
          <a class="btn">scopri di più!</a>      
        </div>
      );
  }

}

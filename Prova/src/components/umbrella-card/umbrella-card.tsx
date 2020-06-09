import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'umbrella-card',
  styleUrl: 'umbrella-card.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class UmbrellaCard implements ComponentInterface {

  render() {
    return (
      <div class="cardcontainer">
        <img class="umbrella" src="/assets/umbrella-insurance.png"></img>
        <h3 class="title"> Assicurazioni Ombrello</h3>
        <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
        <a class="btn">scopri di più!</a>      
      </div>
    );
  }

}

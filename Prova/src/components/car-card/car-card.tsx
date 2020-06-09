import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'car-card',
  styleUrl: 'car-card.css',
  shadow: true,
})
export class CarCard implements ComponentInterface {

  render() {
    return (
      <div class="cardcontainer">
        <img class="car" src="/assets/car-insurance.png"></img>
        <h3 class="title"> Assicurazione autovetture</h3>
        <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
        <a href="javascript:void(0)" class="btn">scopri di più!</a>      
      </div>
    );
  }

}
import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'healt-card',
  styleUrl: 'healt-card.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class HealtCard implements ComponentInterface {

  render() {
    return (
      <div class="cardcontainer">
        <img class="healt" src="/assets/healt-insurance.png"></img>
        <h3 class="title"> Assicurazione sanitaria</h3>
        <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
        <a class="btn">scopri di più!</a>      
      </div>
    );
  }

}

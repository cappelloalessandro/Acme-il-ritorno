import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'money-card',
  styleUrl: 'money-card.css',
  shadow: true,
  assetsDirs:["/assets"],
})
export class MoneyCard implements ComponentInterface {

  render() {
      return (
        <div class="cardcontainer">
          <img class="money" src="/assets/money-insurance.png"></img>
          <h3 class="title"> Assicurazione Proprietà</h3>
          <p class=" description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et sint quam qui natus dolore dolorum numquam, obcaecati ducimus quo?</p>
          <a class="btn">scopri di più!</a>      
        </div>
    );
  }

}
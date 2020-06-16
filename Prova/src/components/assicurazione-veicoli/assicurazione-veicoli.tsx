import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'assicurazione-veicoli',
  styleUrl: 'assicurazione-veicoli.css',
  shadow: true,
})
export class AssicurazioneVeicoli implements ComponentInterface {

  render() {
    return (
      <div class="grid col-2">
        <div>
          <h3>Assicura oggi la tua vettura</h3>
          <h5>è questione di click!</h5>
          <img class="icona" src="/assets/app.png" alt="prova"/>
          <input type="text" placeholder="Targa della tua vettura"></input>
        </div>
        <div>
          <img src="/assets/car-private.jpg" alt="car"/>
        </div>
      </div>
    );
  }

}

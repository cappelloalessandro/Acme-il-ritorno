import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'header-effetto',
  styleUrl: 'header-effetto.css',
  shadow: true,
})
export class HeaderEffetto implements ComponentInterface {

  render() {
    return (
     <article class="grid opacity">
      <div>
        <h3> <span>Soluzioni finanziare</span> agevolate per far fronte al Covid-19</h3>
        <p>Agevolazioni finanziare per i nuovi clienti e le nostre aziende fidelizzate su misura, per te e la tua attività!</p>
        <a href="javascript:void(0)">Scopri le nostre soluzioni</a>
      </div>
     </article>
    );
  }

}

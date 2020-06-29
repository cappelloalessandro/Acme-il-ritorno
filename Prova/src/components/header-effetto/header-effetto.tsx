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
        <h3> Ciao questa è una frase ad effetto </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, blanditiis? Dolore repellendus iusto esse natus eius totam quaerat tempora ut aut labore, dolores, porro pariatur ducimus accusamus recusandae. Nesciunt, nemo.</p>
      </div>
     </article>
    );
  }

}

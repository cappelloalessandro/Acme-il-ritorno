import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'txt-header',
  styleUrl: 'txt-header.css',
  shadow: true,
})



export class TxtHeader implements ComponentInterface {

  render() {
    return (
    <div>
      
      <h1>ACME ENTERPRISE</h1>
      <p>
        Servizi finanziari e assicurativi dal 2003
      </p>
      <button>
        Scopri i nostri servizi
      </button>
    </div>
    );
  }

}

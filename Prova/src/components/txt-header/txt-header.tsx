import { Component, ComponentInterface, h } from '@stencil/core';
/**
 * txt header component
 * @author Andrea Lepori
 */
@Component({
  tag: 'txt-header',
  styleUrl: 'txt-header.scss',
  shadow: true,
})



export class TxtHeader implements ComponentInterface {
/**
 * text inside the bcg-header component
 */
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

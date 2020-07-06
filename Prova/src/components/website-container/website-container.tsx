import { Component, ComponentInterface, Host, h } from '@stencil/core';
/**
 * wrapper components
 * @author Andrea Lepori, Alessandro Cappello, Lavinia Garau
 */
@Component({
  tag: 'website-container',
  styleUrl: 'website-container.css',
  shadow: true,
})
export class WebsiteContainer implements ComponentInterface {

  render() {
    return (
      <Host>
        <top-navbar></top-navbar>
        <bcg-header></bcg-header>
        <first-content></first-content>
        <assicurazione-veicoli></assicurazione-veicoli>
        <header-effetto></header-effetto>
        <banner-certezze></banner-certezze>
        <banner-app></banner-app>
        <form-wrapper></form-wrapper>
        <fetch-articoli></fetch-articoli>
        <bottom-footer></bottom-footer>
      </Host>
    );
  }

}

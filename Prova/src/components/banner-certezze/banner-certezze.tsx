import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'banner-certezze',
  styleUrl: 'banner-certezze.css',
  shadow: true,
})
export class BannerCertezze implements ComponentInterface {

  render() {
    return (
    <div>
      <h4>Perchè i nostri clienti scelgono ACME</h4>
     <div class="grid col-4">
       <article>
          <img class="icona" src="/assets/time.png" alt="tempo"/>
          <h5>Disponibilità</h5>
          <p>In caso di incidente puoi contattare il nostro servizio di gestione sinistri disponibile <b>24 ore su 24, 7 giorni su 7.</b> </p>
       </article>
       <article>
          <img class="icona" src="/assets/privati.png" alt="clienti"/>
          <h5>Clienti fidelizzati</h5>
          <p>Il nostro team di consulenti è sempre a vostra disposizione, anche per questo il <b>100% dei clienti</b> ACME è soddisfatto dei nostri servizi.</p>
       </article>
       <article>
          <img class="icona" src="/assets/assicurazioni.png" alt="assicurazioni"/>
          <h5>Protezione</h5>
          <p>Le nostre polizze sono garantite dalla solidità e dall'esperienza di <b>GigiBagiugi Insurance</b> e La <b>Parabolics spa.</b></p>
       </article>
     </div>
    </div>
    );
  }

}

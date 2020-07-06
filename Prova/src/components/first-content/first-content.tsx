import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'first-content',
  styleUrl: 'first-content.css',
  shadow: true,
})
export class FirstContent implements ComponentInterface {

  render() {
    return (
     <div class="feature">
       <div class="flex">
          <div class="motto">
              <h4>La tua polizza oggi è su misura per te!</h4>
              <h2>Innovativa, Sicura, Veloce!</h2>
          </div>
        </div>

       <div class="grid col-4">
        <article>
          <img class="icona" src="/assets/applicazione.png" alt="tempo"/>
          <h3> Scopri la nostra Applicazione</h3>
          <p class="card">Da oggi, i tuoi documenti comodamente a portata di click, portali sempre con te con <b>la nostra app.</b> </p>
          <a href="javascript:void(0)">Scopri la nostra app</a>   
        </article>

       <article>
          <img class="icona" src="/assets/privati.png" alt="tempo"/>
          <h3>Assistenza clienti dedicata</h3>
          <p class="card">Il nostro team di consulenti è sempre a vostra disposizione per <b>qualsiasi problema assicurativo.</b></p>
          <a href="javascript:void(0)">Contattaci ora!</a>
       </article>

       <article>
          <img class="icona" src="/assets/crane.png" alt="crane"/>
          <h3>Soccorso stradale sempre attivo</h3>
          <p class="card">In caso di incidente puoi contattare il nostro servizio di gestione sinistri disponibile <b>24 ore su 24, 7 giorni su 7.</b></p>
          <a href="javascript:void(0)">Chiama ora!</a>
       </article>

       <article>
          <img class="icona" src="/assets/assicurazioni.png" alt="assicurazioni"/>
          <h3>Assicurazioni per privati e aziende</h3>
          <p class="card">Le nostre polizze sono garantite dalla solidità e dall'esperienza di <b>GigiBagiugi Insurance.</b></p>
          <a href="javascript:void(0)">Scopri di più</a>
       </article>

       </div>
     </div>
    );
  }

}
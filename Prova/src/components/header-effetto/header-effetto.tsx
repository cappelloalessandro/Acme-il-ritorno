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
        <h3>Emergenza sanitaria covid</h3>
        <p>Si informa che tutte le scadenze dei <b>Pacchetti di Manutenzione</b> previste nei mesi di marzo e di aprile verranno posticipate di <b>90 giorni.</b> La nuova scadenza dei servizi di manutenzione scaduti a marzo diverrà pertanto <b>30/06/2020 </b> mentre quella dei servizi in scadenza ad aprile diverrà il <b>31/07/2020.</b></p>
      </div>
     </article>
    );
  }

}

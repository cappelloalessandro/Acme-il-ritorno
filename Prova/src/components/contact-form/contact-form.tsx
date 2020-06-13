import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss',
  shadow: true,
})
export class ContactForm implements ComponentInterface {

  render() {
    return (
      // form component

  <div class="wrapper">

    <div class="bgc">
     {/* <p class="title">NON ESITARE A CONTATTARCI!</p> */}
    </div>
    
    <form>
        <p>
          <label>Nome e cognome *</label>
          <input type="text" name="namesname" placeholder="nome e cognome" required/>
        </p>
        <p>
          <label>Email *</label>
          <input type="email" name="email" placeholder="email" required/>
        </p>
        <p>
          <label>Cell</label>
          <input type="tel" name="tel" placeholder="n° cellulare"/>
        </p>
        <p>
          <label>Argomento</label>
          <input type="text" name="argomento" placeholder="argomento"/>
        </p>
        <p class="full-width">
          <label>Scrivici un messaggio *</label>
          <textarea name="messaggio" id="message"required></textarea>
        </p>
        <p class="full-width">
          <button type="submit"><strong>Submit</strong></button>
        </p>
      </form>

  </div>
      
    );
  }

}

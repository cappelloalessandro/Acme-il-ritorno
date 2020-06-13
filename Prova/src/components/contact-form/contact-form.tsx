import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss',
  shadow: true,
})
export class ContactForm implements ComponentInterface {

  render() {
    return (
    <div id="form">
    <h1>Non esitare a contattarci!</h1>
    <form>
      <label htmlFor="fname">Nome</label>
      <input type="text" name="fname"placeholder="Nome" required></input>
      <label htmlFor="fname">Cognome</label>
      <input type="text" name="sname"placeholder="Cognome" required></input>
      <label htmlFor="mail">Mail</label>
      <input type="text" name="mail" placeholder="namesname@gmail.com" required></input>
      <input class="submit" type="submit" value="Submit"></input>
    </form>
  </div>
      
    );
  }

}

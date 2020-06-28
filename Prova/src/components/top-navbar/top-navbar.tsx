import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'top-navbar',
  styleUrl: 'top-navbar.css',
  shadow: true,
})
export class TopNavbar implements ComponentInterface {

  render() {
    return (
      <div class="wrapper">

        <div class="logo">
          <a href="index.html">
            <img src="assets/logo.png"></img>
          </a>
        </div>

        <nav>
          <ul class="flex">
            <li><a href="#"><strong>Servizi</strong></a></li>
            <li><a href="#"><strong>Contatti</strong></a></li>
            <li><a href="#"><strong>Login</strong></a></li>
          </ul>
        </nav>
            
      </div>
    );
  }

}

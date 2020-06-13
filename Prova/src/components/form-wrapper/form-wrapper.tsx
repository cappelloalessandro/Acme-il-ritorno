import { Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'form-wrapper',
  styleUrl: 'form-wrapper.scss',
  shadow: true,
})
export class FormWrapper implements ComponentInterface {

  render() {
    return (
      <div class="wrapper">

        <div class="title grid">
          <div></div>
          <div class="little_title"><h3 >Contatti</h3>
          <p>Non farti scrupoli, se hai un problema scrivici!</p></div>
          <div></div>
        </div>

        <contact-form></contact-form>
      </div>

    );
  }

}

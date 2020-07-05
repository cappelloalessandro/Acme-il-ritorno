import { Component, ComponentInterface, h} from '@stencil/core';
/**
 * form-wrapper component
 * @author Lavinia Garau
 */
@Component({
  tag: 'form-wrapper',
  styleUrl: 'form-wrapper.scss',
  shadow: true,
})
export class FormWrapper implements ComponentInterface {
/**
 * wrapper is form container
 * title grid is the section name
 * contact form is the form component
 */
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

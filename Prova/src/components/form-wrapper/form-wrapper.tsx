import { Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'form-wrapper',
  styleUrl: 'form-wrapper.scss',
  shadow: true,
})
export class FormWrapper implements ComponentInterface {

  render() {
    return(
      <div class="wrapper">
        <div class="bgc-img">
          <div class="overlay"></div>
          <contact-form></contact-form>
        </div>
      </div>
    );
  }

}

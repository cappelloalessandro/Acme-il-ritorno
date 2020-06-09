import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'named-slot-paragraph',
  styleUrl: 'named-slot-paragraph.scss',
  shadow: true,
})
export class NamedSlotParagraph implements ComponentInterface {

  render() {
    return (
  <p>
  <slot name="first" />
    questo è un testo dentro allo slot
  </p>
    );
  }

}

import { Component, ComponentInterface, h } from '@stencil/core';
/**
 * footer component
 * @author Lavinia Garau
 */
@Component({
  tag: 'bottom-footer',
  styleUrl: 'bottom-footer.css',
  shadow: true,
})
export class BottomFooter implements ComponentInterface {

  render() {
    return (
      <footer class="wrapper grid col-3 full-height">
        <div class="col">
        <p>Il sito è stato creato a scopo didattico dagli allievi del corso accademico primo anno della Scuola Mohole di Web e 
          DigitalMedia.</p> 
        <p>I diritti dei contenuti e dei marchi citati appartengono ai loro legittimi proprietari.</p>
        </div>

        <div class="col">
          <a href="#" class="social_icon fb">
            <img src="assets/facebook.png"></img>
          </a>
          
          <a href="#" class="social_icon in">
            <img src="assets/linkedin.png"></img>
          </a>
        
        </div>
        
    </footer>
    );
  }

}

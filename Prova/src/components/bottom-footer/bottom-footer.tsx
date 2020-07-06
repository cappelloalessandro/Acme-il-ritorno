import { Component, ComponentInterface, h } from '@stencil/core';
/**
 * header component
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
            <p>Sito realizzato per scopi didattici. </p>
            <p>Ogni informazione è fittizia.</p>
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

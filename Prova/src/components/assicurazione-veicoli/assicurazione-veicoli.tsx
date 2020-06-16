import { Component, ComponentInterface, h, State } from '@stencil/core';

@Component({
  tag: 'assicurazione-veicoli',
  styleUrl: 'assicurazione-veicoli.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class AssicurazioneVeicoli implements ComponentInterface {

  render() {
    return (
      <div class="grid col-2">
        <div class="titol">
          <h3>Assicura oggi la tua vettura</h3>
          <h5>è questione di click!</h5>
          {/* <img class="icona" src="/assets/car-insurance.png" alt="none"/> */}
          <img onClick={() => this.changeImage('/assets/car-private.jpg')} id="car" src="/assets/car.png" alt="scooter"/>
          <img onClick={() => this.changeImage('/assets/scooter.jpg')} id="scooter"src="/assets/scooter.png" alt="scooter"/>
          <img onClick={() => this.changeImage('/assets/van-factory.jpg')} id="van" src="/assets/van.png" alt="scooter"/>
          <input type="text" placeholder="Targa della tua vettura"></input>
        </div>
        <div>
          <img id="macchina" class="car"  src={this.imagePath} alt="car"/>
        </div>
      </div>
    );
  }

  @State() imagePath = '/assets/car-private.jpg'
    changeImage(path){
      this.imagePath = path
      // console.log("ciao")
    }
  
}

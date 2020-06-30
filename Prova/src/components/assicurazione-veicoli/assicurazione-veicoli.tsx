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
        <div class="select">
          <h3>Devi rinnovare l'Assicurazione della tua vettura?</h3>
          <h5>questione di click!</h5>
          <div class="selectVehicle targa">
            <img src={this.iconActive} onClick={() => this.listOpened = !this.listOpened} alt="" />
            {this.listOpened ? <div class="list">
              <div class="list-item">
                <img onClick={() => this.changeImage({ 
                  icon: '/assets/car.png', image: '/assets/car-private.jpg' 
                  })}
                  id="car" src="/assets/white-car.png" alt="car" />
              </div>
              <div class="list-item">
                <img onClick={() => this.changeImage({ 
                  icon: '/assets/scooter.png', image: '/assets/scooter.jpg' 
                })}
                  id="scooter" src="/assets/white-scooter.png" alt="scooter" />
              </div>
              <div class="list-item">
                <img onClick={() => this.changeImage({ 
                  icon: '/assets/van.png', image: '/assets/van-factory.jpg'
                })}
                  id="van" src="/assets/white-van.png" alt="van" />
              </div>
            </div> : null}
            <input type="text" placeholder="Inserisci QUI la targa"/>
            <button>Conferma!</button>
            {/* <a class="btn" href="javascript:void(0)">Conferma!</a> */}
          </div>
          {/* <input type="text" placeholder="Targa della tua vettura"></input> */}
        </div>
        <div>
          <img id="macchina" class="car" src={this.imagePath} alt="car" />
        </div>
      </div>
    );
  }

  @State() imagePath: string = '/assets/car-private.jpg';
  @State() iconActive: string = '/assets/car.png';
  @State() listOpened: boolean = false


  changeImage(path) {
    this.imagePath = path.image
    this.iconActive = path.icon
    this.listOpened = false
  }

}

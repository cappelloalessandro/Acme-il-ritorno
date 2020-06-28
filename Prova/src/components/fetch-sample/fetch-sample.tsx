import { Component, ComponentInterface, h, Host, State } from '@stencil/core';
import { User } from './user.interface';

@Component({
  tag: 'fetch-sample',
  styleUrl: 'fetch-sample.css',
  shadow: true,
})
export class FetchSample implements ComponentInterface {
@State() users: Array<User> = [];

  private fetchData=() =>  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => (this.users = json));
  }
  // private fetchData=() =>  {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => (this.post = json));
  // }

  render() {
    return (
      <Host>
      <button onClick={this.fetchData}>Load users</button>
      {this.users.map((user) => (
        <div>
          <b>{user.name}</b>  <i>{user.email}</i>
        </div>
      ))}
      </Host>
    
    );
  }

}
//   render() {
//     return (
//       <Host>
//       <button onClick={this.fetchData}>Load users</button>
//       {this.users.map((user) => (
//         <div>
//           <b>{user.name}</b>  <i>{user.email}</i>
//         </div>
//       ))}
//       </Host>
    
//     );
//   }

// }

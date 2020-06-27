import { Component, ComponentInterface, Host, h, State} from '@stencil/core';
import { Articles } from "./article.interface"; 

@Component({
  tag: 'fetch-articoli',
  styleUrl: 'fetch-articoli.scss',
  shadow: true,
})
export class FetchArticoli implements ComponentInterface {
@State() articles: Array<Articles>=[];
  private fetchData =() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) =>(this.articles = json));
};

  render() {
    return (
      <Host>
<button onClick={this.fetchData} class="pure-button">Load article</button>
<div class="wrapper">
{this.articles.map(article =><div class="article">

  <div class="img">
   <img src="http://devimg.com/500x500/oldtimers">
  
  </img></div>
  <div class="title"> {article.title}  </div>
 <div class="body">
        {article.body}
   <div>
       <button type="button" class="btn btn-warning">Read more</button>
        </div>
    </div>
    
</div>

)}
</div>
    </Host>
    );
  }

}

import { Component, ComponentInterface, Host, h, State} from '@stencil/core';
import { Articles } from "./article.interface"; 
/**
 * articles component
 * @author Andrea Lepori, Lavinia Garau
 */
@Component({
  tag: 'fetch-articoli',
  styleUrl: 'fetch-articoli.scss',
  shadow: true,
})


export class FetchArticoli implements ComponentInterface {
 

// inspired by Andrea Guffi's acme-news component
@State() articles: Array<Articles>=[];
@State() limit = 3;
@State() page = 1;

  /**
   * fecth 3 element when page is ulpload
   */
componentDidLoad() {
  this.fetchData();
}

private fetchData =() => {
  if (this.limit >= 15) {
    return;
  }
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
      .then((response) => response.json())
      .then((json) =>(this.articles = json));
      this.limit += 3;
};

  render() {
    return (
      <Host>
        <h4>News</h4>
        <div class="wrapper">
              {this.articles.map(article =>
              
              <div class="article">
                {/* article img */}
                <div class="img">
                <img src="/assets/news_img.jpg"></img></div>

                {/* article title */}
                <div class="title"><strong> {article.title}</strong></div>

                {/* article body */}
                <div class="article-body">
                  {article.body}
                  <div class="article-btn"><button type="button" class="btn btn-article">Leggi articolo</button></div>
                </div>
                
            </div>

        )}
        
        </div>
        <div class="btn-container"><button class='fetch-btn-loadmore' onClick={this.fetchData}>Carica di più </button></div>
        
    </Host>
    );
  }

}

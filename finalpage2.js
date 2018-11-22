var xmlhttp;
articles ='';
xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://foodog.herokuapp.com/articles", false);
xmlhttp.send();
response = JSON.parse(xmlhttp.responseText);

for (let i = 0; i <response.docs.length; i++ ){
  articles += `  <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-4">
            <img src="${(response.docs[i].imgUrl)}" class="image1"></div>
                   <div class="col-sm-4  col-md-5 col-lg-4">
                      <p class='section1'> Nutrition</p> 
                      <a href ='article.html?id=${(response.docs[i]._id)}'>  
                      <h1 class='section2'> ${(response.docs[i].title)}</h1></a>
                      <p class='section3'>${(response.docs[i].text.substring(0,47))}</p>
                  </div>
              </div>
          </div>
  </div>
`


}

class Articles extends HTMLElement {
constructor() {
super();

let shadow = this.attachShadow({mode: 'open'}); //= attach a shadow root to any element using the Element.attachShadow() method. 
let custHeader = document.createElement('main');
let bootstrapcdn = document.createElement('link');
let bootstrap = document.createElement('link');
bootstrapcdn.setAttribute('rel','stylesheet');
bootstrapcdn.setAttribute('href','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

bootstrap.setAttribute('rel','stylesheet');
bootstrap.setAttribute('href','Bootstrap.css');


custHeader.innerHTML =`${articles}`

shadow.appendChild(bootstrapcdn)
shadow.appendChild(bootstrap)
shadow.appendChild(custHeader);

}

}

customElements.define('main-articles', Articles);

class main extends HTMLElement {
constructor() {
super();

let shadow = this.attachShadow({mode: 'open'}); //= attach a shadow root to any element using the Element.attachShadow() method. 
let custHeader = document.createElement('main');
let bootstrapcdn = document.createElement('link');
let bootstrap = document.createElement('link');
bootstrapcdn.setAttribute('rel','stylesheet');
bootstrapcdn.setAttribute('href','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

bootstrap.setAttribute('rel','stylesheet');
bootstrap.setAttribute('href','Bootstrap.css');


custHeader.innerHTML =`
<div class="jumbotron jumbotron-fluid">
  <div class="container" style="text-align: center">
    <h1>Digest</h1>     
  </div>
</div>

<main-articles></main-articles>`


shadow.appendChild(bootstrapcdn)
shadow.appendChild(bootstrap)
shadow.appendChild(custHeader);

}

}

customElements.define('main-block', main);
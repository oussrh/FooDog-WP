let url = new URLSearchParams(window.location.search);
url = url.get('id');
var xmlhttp;
articles = '';
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://foodog.herokuapp.com/articles", false);
xmlhttp.send();
response = JSON.parse(xmlhttp.responseText);

let montext = ''
for (let i = 0; i < response.docs.length; i++) {
    if (response.docs[i]._id == url) {

        montext = response.docs[i];
    }
}

class Article extends HTMLElement {
    constructor() {
        super();
        let shadowDom = this.attachShadow({ mode: 'open' });
        let custHeader = document.createElement('div');
        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'CSS/article.css')
        let police = document.createElement('link');
        police.setAttribute('rel', 'stylesheet');
        police.setAttribute('href', 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans');
        let icone = document.createElement('link');
        icone.setAttribute('rel', 'stylesheet');
        icone.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');

        shadowDom.appendChild(style);
        shadowDom.appendChild(custHeader);
        shadowDom.appendChild(police);
        shadowDom.appendChild(icone);

        custHeader.innerHTML = `
    <div id="content">
      <div class="box" >Nutrition</div>
      <div class="box" ><p><h2>${(montext.title)}</h2></p></div>
      <div class="box" ><img src="${(montext.imgUrl)}" class="image1">

        <div class="box" >
        <img src="http://digest.thefarmersdog.com/wp-content/uploads/2017/05/xAd.png.pagespeed.ic.93QlrrlK5i.jpg" class="image2"> 
        </div></div>

        <div class="box8" >
            <p class= 'section11'>Share</p>
            <p class= 'section11'><a class="fab fa-instagram"></a> 
            <p class= 'section11'><a class="fab fa-twitter"></a> </p>
            <p class= 'section11'><a class="fab fa-facebook-f"></a>
            <p class= 'section11'><a class="fab fa-facebook-f"></a>
            </div>

        <div class="box5"><p>${(montext.text)}</p></div>

        <div class="box2" >
            <p>Share</p><p ><a class="fab fa-twitter"></a> 
            <p ><a class="fab fa-facebook-f"></a> </p>
            <p ><a class="fab fa-instagram"></a>
            <p ><a class="fab fa-facebook-f"></a>
        </div>
        <div class="box" ><p><h2>Subscribe to the Digest Letters</h2><br></div>

        <div class="box" ><p>Get health and wellness tips about your dog delivered to your inbox.</p></div>

        <div class="box"> 
            <textarea name="textarea"rows="2" cols="60">Your Email</textarea>
            <p class='box6'>Sign up</p>
        </div>

        <div class="box3">
            <p class = 'section1' style='font-size: 10px'>Previous Articles</p>
            <p class='section2'style='font-size: 10px'>Next Articles</p>
        </div>

        <div class="box3" >
            <p class = 'section1' style='font-size: 10px'><strong> Superfoods in Your Kitchen: Pumpkins for Dogs</strong> </p>
            <p class='section2 'style='font-size: 10px'><strong>Why National Pet Day is More Than Just a Holiday</strong></p>
        </div>

        <div class="box3" >
          <img src="http://2.gravatar.com/avatar/b53e70446036669a0cae7fffabc3c2f3?s=140&d=mm&r=g" alt='eee' class='image3'><p><strong>The Farmers Dog</strong><br><br>The Farmer’s Dog is the leading direct-to-consumer, fresh pet food company, offering customers and their pets the highest quality and convenience without retail markups. All human-grade meal plans are made to order, designed by veterinarians, and personalized to provide the ideal nutritional balance for every dog. Get started today at https://www.thefarmersdog.com</p></div>
          <div class="box3" ><p><strong>You might also like</strong></p></div>

          <div id="index-gallery">
            <div class="item">
              <img src="${(montext.imgUrl)}"/>
              <p>Superfoods in Your Kitchen: Carrots for Dogs</p>
            </div>
            <div class="item1">
              <img src="${(montext.imgUrl)}"/>
              <p>The 11 Dog Food Label Tricks Every Owner Needs to Know</p>
            </div>
            <div class="item2">
              <img src="${(montext.imgUrl)}"/>
              <p>Superfoods in Your Kitchen: Pumpkins for Dogs</p>
            </div>
          </div>

          <div class="box3" ><p><h2>Leave a Response</h2></p>
            <textarea rows="10" cols="115" name="comment" form="usrform">Enter text here...</textarea>
        </div>
        <div class="box5" >
            <textarea name="textarea"rows="1" cols="15">Nom.</textarea>
            <textarea name="textarea"rows="1" cols="15">Email.</textarea>
            <textarea name="textarea"rows="1" cols="15">Website.</textarea>
        </div>
        <div class="box3">
            <p class='box7'><strong>Leave a Comment</strong></p>
        </div>
       </div>
 

`

    }


}

customElements.define('article-comp', Article);
let url = new URLSearchParams(window.location.search);
url = url.get('id');

var xmlhttp;
articles ='';
xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://foodog.herokuapp.com/articles", false);
xmlhttp.send();
response = JSON.parse(xmlhttp.responseText);

let montext = ''
for (let i = 0; i <response.docs.length; i++){ 
if(response.docs[i]._id == url){

    montext = response.docs[i];
} }

class Page extends HTMLElement {
constructor() {
super();
 this.attachShadow({mode: 'open'});
xmlhttp.onload = this.x();
 
}
x(){

let custHeader = document.createElement('div');
let police = document.createElement('link');
        police.setAttribute('rel', 'stylesheet');
        police.setAttribute('href', 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans');

let icone = document.createElement('link');
        icone.setAttribute('rel', 'stylesheet');
        icone.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
    


this.shadowRoot.appendChild(custHeader);
this.shadowRoot.appendChild(police);
this.shadowRoot.appendChild(icone);
 
custHeader.innerHTML = `
 <style>
    p{
    font-family: 'Open Sans', sans-serif;
    }
    .fa {
    padding: 5px;
    font-size: 30px;
    width: 80px;
    text-align: center;
    }

    .fa-facebook-f { 
    width:100%;
    height:100%;
    color: black;
    }

    #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    .box1 {
    width: 100%;
    height: 100%;

    }
    .box {
    padding:10px;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .image1{
    margin-left:20%;
    height: 100%;
    width:100%;
    }
    .image2{
    height: 80%;
    width:50%;
    
    }
    .box2{
    padding:10px;
    width: 30%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    }
    .section11{
    display: inline-flex;
    padding:20px;
    width:100%;

    }

    .box3{
    padding:10px;
    width: 50%;
    height: 100%;
    }

    .section2{
    float:right;
    }

    .image3{
    float:left;
    }

    .image4{
    margin-right:10px;
    text-align: center;
    }

    .image5{
    margin-right:10px;
    }

    .box5{
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    padding:10px;
    width: 50%;
    height: 100%;
    }

    .textarea{
    display: inline-flex;
    }

    .box9{
    padding:10px;
    width: 48%;
    height: 100%;
    display: flex;
    }

    .box6{
    border: 1px solid black;
    background-color:orange;
    width:10%;
    height:90%;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .box7{
    border: 1px solid black;
    background-color:black;
    width:30%;
    height:40%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    }

    .box8{
    padding:10px;
    width: 30%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    }

    .item {
    width:20%;
    text-align:center;
    display:block;
    }

    .item img{
      width:100%;  
    ;}

    #index-gallery{
    display:flex;
    justify-content:row;
    width:60%;
    margin-left:10%;
    }

    .item1  {
    display:block;
    width:20%;
    margin-left:10%;
    }

    .item1 img{
      width:100%;  
    }

  .item2 {
    display:block;
    width:20%;
    margin-left:10%;
    }
    .item2 img{
    width:100%;

    }
    @media screen and (max-width: 768px){
     .box5 {font-size:10px;}
     p {font-size:10px;}
     h2 {font-size:20px;}
}

    </style>
    <div id="content">

      <div class="box1" style='font-size:20px;'>FooDog</div>

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
    <footer-template></footer-template>

`
 
}

}
  
customElements.define('main-block2', Page);
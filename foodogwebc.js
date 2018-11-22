let request = new XMLHttpRequest();
myJson = '';
request.open("GET", "https://foodog.herokuapp.com/articles",false);
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
     myJson = JSON.parse(this.responseText);
    
  }
}
request.send();

class superHeroesElement extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({
      mode: 'open'
    });
    let elemnt = document.createElement("div");
    shadow.appendChild(elemnt);
    elemnt.innerHTML = `
<div class="containner">
    <div class="div1">
        <img src="${myJson.docs[0].imgUrl}" class="dog">
        <h3 class="title0" id="one"> <span class="color">welness</span> <br>${myJson.docs[0].title}</h3>
    </div>
    <div class="div2">
        <img src="${myJson.docs[1].imgUrl}" class="dog">
        <h3 class="title" id="title1">${myJson.docs[0].title}</h3>
        <img src="${myJson.docs[6].imgUrl}" class="dog">
        <h3 class="title" id="title2">${myJson.docs[0].title}</h3>
        <img src="${myJson.docs[7].imgUrl}" class="dog">
        <h3 class="title" id="title3">${myJson.docs[0].title}</h3>
        <img src="${myJson.docs[7].imgUrl}" class="dog">
        <h3 class="title" id="title4">${myJson.docs[0].title}</h3>
    </div>
</div>

<style>
* {
  box-sizing: border-box;
}
.containner {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 15px;
}
.div1 {
  margin: 0 auto;
  grid-template-rows: auto auto;
  max-width: 100%;
}
.dog {
  height: auto;
  max-width: 100%;

}
.div2 {
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  row-gap: 15px;
  column-gap: 15px;
  min-width: 100%;
}
.title {
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  color: #4b4f54;
}
.title0 {
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-style: normal;
  color: #4b4f54;
}
.color {
  color: #ff8d6a;
}
#title1 {
  grid-area: 2/1/3/2;
}
#title2 {
  grid-area: 2/2/3/3;
}
#title3 {
  grid-area: 4/1/5/2;
}
@media screen and (max-width:500px) {
  .containner {
      display: grid;
      grid-template-columns: auto;
      grid-auto-rows: auto auto auto;
  }
  .div1 {
      text-align: center;
  }
  .div2 {
      text-align: center;
  }
}
@media screen and (min-width:500px) {
  .containner {
      display: grid;
      grid-template-columns: auto;
      grid-auto-rows: auto auto auto;
  }
}
@media screen and (min-width:700px) {
  .containner {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 15px;
  }    
}
</style>
`;
  }
}
customElements.define('foo-dog', superHeroesElement);

xhr = new XMLHttpRequest();
let pageUrl = new URLSearchParams(window.location.search);
cat = pageUrl.get('cat');
pageUrl = pageUrl.get('page');


url = `https://foodog.herokuapp.com/articles?page=${pageUrl}`;
xhr.open('GET', url, true);

xhr2 = new XMLHttpRequest();
xhr2.open('GET', url, true);

class Categorie extends HTMLElement {
    constructor() {
        super();

        let pageUrl = new URLSearchParams(window.location.search);
        let categ = pageUrl.get('cat');
        let shadowDom = this.attachShadow({mode: 'open'}); 
        let styleSheet = document.createElement('link');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('href', 'CSS/categorie.css')
        shadowDom.appendChild(styleSheet);
        let section = document.createElement('section');
        section.setAttribute('id', 'latest-post');
        this.shadowRoot.appendChild(section);

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.docs.length; i++) {

                    for (cat = 0; cat < data.docs[i].tagForArticle.length; cat++) {

                        if (data.docs[i].tagForArticle[cat].toLowerCase() === categ) {

                            let div = document.createElement('div');
                            div.classList.add("block");
                            if (data.docs[i].imgUrl == "") {
                                div.innerHTML = /*html*/ `
                        <a href="http://"><img src="http://ukcdn.ar-cdn.com/recipes/xlarge/nophoto.svg" alt="${data.docs[i].title}"></a>
                        <a href="http://"><h6 class="categories">${data.docs[i].tagForArticle}</h6></a>   
                        <a href="http://"><h2 class="title">${data.docs[i].title}</h2></a>
                        <p class="resume">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad laborum accusantium incidunt voluptas soluta aut. Sequi aliquam hic ex?</p>
                      `
                                section.appendChild(div);

                            } else {
                                div.innerHTML = /*html*/ `   
                        <a href="http://"><img src="${data.docs[i].imgUrl}" alt="${data.docs[i].title}"></a>   
                        <a href="http://"><h6 class="categories">${data.docs[i].tagForArticle}</h6></a>  
                        <a href="http://"><h2 class="title">${data.docs[i].title}</h2></a>
                        <p class="resume">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad laborum accusantium incidunt voluptas soluta aut. Sequi aliquam hic ex?</p>
                      `
                                section.appendChild(div);
                            }

                        }
                    }
                }


            } else {
                let errorMsg = document.createElement('h2');
                errorMsg.textContent = "Sorry, we have a problem come back later";
                errorMsg.style.color = 'red';
                console.error(xhr.statusText);
                section.appendChild(errorMsg)
            }
        }
    }

}
customElements.define('categorie-comp', Categorie);

class Pagination extends HTMLElement {
    constructor() {
        super();

        let section = document.createElement('section');
        section.setAttribute('id', 'pagination');
        this.appendChild(section);

        xhr2.onload = function () {

            if (xhr2.readyState === 4 && xhr2.status === 200) {
                let data = JSON.parse(xhr2.responseText);

                for (let i = 1; i <= data.pages; i++) {
                    let pageLink = document.createElement('a');
                    pageLink.setAttribute("class", "page");
                    pageLink.setAttribute("href", `?page=${i}`);

                    pageLink.innerHTML = `${i}`;
                    section.appendChild(pageLink);

                }



            } else {

                console.error(xhr.statusText);

            }
        }

    }
}
customElements.define('pagination-comp', Pagination);



xhr.send();
xhr2.send();



let pagination = document.body.querySelector("#pagination");
let eachPage = pagination.querySelectorAll(".page");
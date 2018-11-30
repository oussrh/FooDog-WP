xhr = new XMLHttpRequest();

let pageUrl = new URLSearchParams(window.location.search);
pageUrl = pageUrl.get('page');


url = `https://foodog.herokuapp.com/articles?page=${pageUrl}`;
xhr.open('GET', url, true);

xhr2 = new XMLHttpRequest();
xhr2.open('GET', url, true);


class CatArticles extends HTMLElement {
    constructor() {
        super();
        let shadowDom = this.attachShadow({
            mode: 'open'
        });

        let pageUrl = new URLSearchParams(window.location.search);
        let categ = pageUrl.get('cat');

        let styleSheet = document.createElement('link');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('rel', 'preload');
        styleSheet.setAttribute('href', 'CSS/categorie.css');

        shadowDom.appendChild(styleSheet);

        let tagTitle = document.createElement('h2');
        this.shadowRoot.appendChild(tagTitle);
        tagTitle.innerHTML = categ.toUpperCase();

        let section = document.createElement('section');
        section.setAttribute('id', 'cat-post');
        this.shadowRoot.appendChild(section);

        

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.docs.length; i++) {

                    for (let cat = 0; cat < data.docs[i].tagForArticle.length; cat++) {

                        if (data.docs[i].tagForArticle[cat].toLowerCase() === categ.toLowerCase()) {

                            let div = document.createElement('article');
                            div.classList.add("block");

                            let tags = '';
                                for (let j = 0; j < data.docs[i].tagForArticle.length; j++) {
                                    tags += /*html*/`<a href="categorie.html?cat=${data.docs[i].tagForArticle[j]}" title="${data.docs[i].tagForArticle[j]}"><h6 class="categories">${data.docs[i].tagForArticle[j]}</h6></a> `;
                                }

                            if (data.docs[i].imgUrl == "") {

                                div.innerHTML = /*html*/`
                                <figure>
                                <a href="article.html?id=${data.docs[i]._id}" title="${data.docs[i]._id}"><img src="http://ukcdn.ar-cdn.com/recipes/xlarge/nophoto.svg" alt="${data.docs[i].title}"></a>
                                </figure>
                                <section>
                                ${tags}|
                                <a href="article.html?id=${data.docs[i]._id}" title="${data.docs[i].title}"><h3 class="title">${data.docs[i].title}</h3></a>
                                <p class="resume">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad laborum accusantium incidunt voluptas soluta aut. Sequi aliquam hic ex?</p>
                                </section>
                                `
                                section.appendChild(div);

                            } else {

                                div.innerHTML = /*html*/ `
                                <figure>
                                <a href="article.html?id=${data.docs[i]._id}" title="${data.docs[i].title}"><img src="${data.docs[i].imgUrl}" alt="${data.docs[i].title}"></a>
                                </figure>
                                <section>
                                ${tags}|
                                <a href="article.html?id=${data.docs[i]._id}" title="${data.docs[i].title}"><h3 class="title">${data.docs[i].title}</h3></a>
                                <p class="resume">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad laborum accusantium incidunt voluptas soluta aut. Sequi aliquam hic ex?</p>
                                </section>
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

customElements.define('catarticles-comp', CatArticles);
customElements.define('pagination-comp', Pagination);


xhr.send();
xhr2.send();



// let pagination = document.body.querySelector("#pagination");
// let eachPage = pagination.querySelectorAll(".page");
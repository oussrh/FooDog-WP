
xhr = new XMLHttpRequest();
xhr.open("GET", "https://foodog.herokuapp.com/articles", true);



class Articles extends HTMLElement {
        constructor() {
                super();
                let shadow = this.attachShadow({ mode: 'open' });
                let main = document.createElement('main');
                let style = document.createElement('link');
                style.setAttribute('rel', 'stylesheet');
                style.setAttribute('href', 'CSS/index.css');
                let police = document.createElement('link');
                police.setAttribute('rel', 'stylesheet');
                police.setAttribute('href', 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans');
                let icone = document.createElement('link');
                icone.setAttribute('rel', 'stylesheet');
                icone.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
                shadow.appendChild(style);
                shadow.appendChild(police);
                shadow.appendChild(icone);
                this.shadowRoot.appendChild(main);


                xhr.onload = function () {
                        
                        if (xhr.status === 200 && xhr.readyState === 4) {
                                let response = JSON.parse(xhr.responseText)

                                for (let i = 0; i < response.docs.length; i++) {
                                        let tagForArticle = "";
                                        let div = document.createElement('div')
                                        div.setAttribute('class', 'article-row')

                                        for (let x = 0; x < response.docs[i].tagForArticle.length; x++) {
                                                if (x < (response.docs[i].tagForArticle.length - 1)) {
                                                        tagForArticle += `<a href="#">${response.docs[i].tagForArticle[x]}</a>`
                                                }
                                                else {
                                                        tagForArticle += `<a href="#" style="border-right: 1px solid rgb(238, 238, 238)">${response.docs[i].tagForArticle[x]}</a>`
                                                }

                                        }
                                        div.innerHTML = /*html*/`  
                <div class="article">
                        <a class ="img-hover"href="article.html?id=${(response.docs[i]._id)}"><img src="${(response.docs[i].imgUrl)}" class="image1"></a>
                        <div class="content">
                                <div class="tags">
                                        ${tagForArticle}
                                </div>
                                <a href ='article.html?id=${(response.docs[i]._id)}'>  
                                        <h2 class='title'> ${(response.docs[i].title)}</h2>
                                </a>
                                <p class='post-excerpt'>${(response.docs[i].text.substring(0, 60))}</p>
                        </div>
                </div>`
                                        main.appendChild(div)
                                }
                        }

                }
        }
}
xhr.send();
customElements.define('main-articles', Articles);

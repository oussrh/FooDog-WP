var xmlhttp;
articles = '';
xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://foodog.herokuapp.com/articles", false);
xmlhttp.send();
data = JSON.parse(xmlhttp.responseText);

for (let i = 0; i < 3; i++) {
    articles += /*html*/ `
            <section class="topArticle col-lg-12 d-flex">
                <figure class="col-lg-5">
                    <img src="${data.docs[i].imgUrl}" />
                </figure>
                <article class="offset-lg-1 col-lg-6 d-flex">
                    <p>${data.docs[i].title}</p>
                </article>
            </section>`;
}

class FeaturedPost extends HTMLElement {
    constructor() {
        super()

        let shadowDom = this.attachShadow({
            mode: 'open'
        });

        let linkStyle = document.createElement('link');
        linkStyle.setAttribute('rel', 'stylesheet');
        linkStyle.setAttribute('href', 'footer.css');

        let linkBoots = document.createElement('link');
        linkBoots.setAttribute('rel', 'stylesheet');
        linkBoots.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

        let linkFont = document.createElement('link');
        linkFont.setAttribute('rel', 'stylesheet');
        linkFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans');

        let linkfontawesome = document.createElement('link');
        linkfontawesome.setAttribute('rel', 'stylesheet');
        linkfontawesome.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');

        let footer = document.createElement('div');
        footer.setAttribute('class', 'container-fluid');
        footer.innerHTML = /*html*/ `
            ${articles}
        `
        ;

        shadowDom.appendChild(linkStyle);
        shadowDom.appendChild(linkBoots);
        shadowDom.appendChild(linkFont);
        shadowDom.appendChild(linkfontawesome);
        shadowDom.appendChild(footer);

    }
}
customElements.define('featured-post', FeaturedPost);



class Footer extends HTMLElement {
    constructor() {
        super()

        let shadowDom = this.attachShadow({
            mode: 'open'
        });

        let linkStyle = document.createElement('link');
        linkStyle.setAttribute('rel', 'stylesheet');
        linkStyle.setAttribute('href', 'footer.css');

        let linkBoots = document.createElement('link');
        linkBoots.setAttribute('rel', 'stylesheet');
        linkBoots.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

        let linkFont = document.createElement('link');
        linkFont.setAttribute('rel', 'stylesheet');
        linkFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans');

        let linkfontawesome = document.createElement('link');
        linkfontawesome.setAttribute('rel', 'stylesheet');
        linkfontawesome.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');

        let footer = document.createElement('div');
        footer.setAttribute('class', 'container-fluid');
        footer.innerHTML = /*html*/ `
            <div class="row">
                        <footer class="col-lg-12">
                            <div class="row">
                                <section class="lightSide d-flex col-lg-12">
                                    <section class="offset-lg-1 col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                        <h3>CATAGORIES</h3>
                                        <ul class="menuFooter">
                                            <li>Community</li>
                                            <li>Featured</li>
                                            <li>Lifestyle</li>
                                            <li>Nutrition</li>
                                            <li>Uncategorized</li>
                                            <li>Wellness</li>
                                        </ul>
                                    </section>
                                    <section id="popularPost" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <h3>POPULAR POSTS</h3>
                                        <featured-post></featured-post>
                                    </section>
                                    <section class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                        <h3>INSTAGRAM</h3>
                                    </section>
                                </section>
                            </div>
                            <div class="row">
                                <section class="darkSide col-lg-12">
                                    <div class="row">
                                        <section class="socialNet col-lg-12">
                                            <a><i class="fab fa-facebook-f"></i></a>
                                            <a><i class="fab fa-twitter"></i></a>
                                            <a><i class="fab fa-instagram"></i></a>
                                        </section>
                                    </div>
                                    <div class="row">
                                        <section class="signature col-lg-12 ">
                                            <p>2017 © The Farmer's Dog</p>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </footer>
                    </div>`;
        shadowDom.appendChild(linkStyle);
        shadowDom.appendChild(linkBoots);
        shadowDom.appendChild(linkFont);
        shadowDom.appendChild(linkfontawesome);
        shadowDom.appendChild(footer);
    }
}

customElements.define('footer-template', Footer);


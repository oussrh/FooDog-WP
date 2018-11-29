class Header extends HTMLElement{
    constructor(){
        super();

        let header = document.createElement('header');

        header.setAttribute('id','header');
        header.setAttribute('class','container-fluid col-12');
        header.innerHTML = /*html*/`
        <div class="row header-block">
        <div class="social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fas fa-search"></i></a>
        </div>
  
        <div class="top-block">
          <div class="logo">
            <a href="index.html">
              <h1>FooDog</h1>
            </a>
          </div>
          <nav id="top-nav" class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link" href="categorie.html?cat=nutrition">Nutrition <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="categorie.html?cat=wellness">Welness</a>
                <a class="nav-item nav-link" href="categorie.html?cat=lifestyle">Lifestyle</a>
                <a class="nav-item nav-link" href="categorie.html?cat=community">Community</a>
              </div>
            </div>
          </nav>
        </div>
      </div>`

      this.appendChild(header);

        
    }
}

customElements.define('header-comp',Header);
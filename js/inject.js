class NavbarStore extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header class="navbar">
        <nav class="navbar-container">

            <h1 class="navbar-brand">Mundo de Tinta🎨</h1>

            <ul class="navbar-list">
                <li class="navbar-list-item"><a class="navbar-link" href="index.html">Libros</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="comics.html">Comics</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="about-us.html">Sobre Nosotros</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="contact.html">Contacto</a></li>
            </ul>

        </nav>
    </header>

    `;
    }
}

customElements.define("navbar-store", NavbarStore);

class FooterStore extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer>
        <p> Aqui iría el footer</p>
    </footer>
    `;
    }
}

customElements.define("footer-store", FooterStore);
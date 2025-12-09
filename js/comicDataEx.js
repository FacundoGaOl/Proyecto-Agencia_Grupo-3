const requestURL = 'json/tiendaComics.json';

function createComicsCard({name, price, cover}) {
    return `
        <div class="card">
            <img src="${cover}" alt="Portada del comic">
            <h3>${name}</h3>
            <h3>${price}€</h3>
            <button class="buy"> <h3>Comprar</h3></button>
        </div>
    `;
}

async function fetchComicsJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

async function displayComics() {
    const comicSection = document.getElementById('comicsSection');
    const comicsData = await fetchComicsJson();
    if (comicsData && comicsData.productsComics) {
        const comicsCards = comicsData.productsComics.map(createComicsCard).join('');
        comicSection.innerHTML = comicsCards;
    }else{
        comicSection.innerHTML = '<p>No hemos podido acceder a la libreria.</p>';
    }
}

displayComics();
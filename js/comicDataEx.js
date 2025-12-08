const requestURL = 'json/tiendaComics.json';

function createComicsCard({name, price}) {
    return `
        <div>
            <h3>${name} ${price}€</h3>
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
        comicSection.innerHTML = '<p>No se pudieron cargar los datos de las casas.</p>';
    }
}

displayComics();
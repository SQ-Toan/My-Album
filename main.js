var artAPI = "http://localhost:3000/arts";

function start(){
    getArts(renderArts);
}

start();

// Functions

// GetArts: lấy thông tin từ API
function getArts(callback){
    fetch(artAPI)
        .then(response => response.json())
        .then(callback);
}

// Render lên giao diện
function renderArts(arts){
    let ulBlock = document.getElementById('album__block-content');
    let html = arts.map(art=>{
        return `<li class="album__item">
            <figure class="album__thumb"><img class="album__img" src="${art.art_address}" alt=""></figure>
            <section class="album__body">
                <h2 class="album__name">${art.name}</h2>
                <p class="album__description">
                    ${art.description}
                </p>
            </section>
        </li>`
    }).join('\n');

    ulBlock.innerHTML = html;
}


var artAPI = "http://localhost:3000/arts";

function start() {
    getArts(renderArts);

    handleCreateArts();
}

start();

// Functions

// GetArts: lấy thông tin từ API
function getArts(callback) {
    fetch(artAPI)
        .then((response) => response.json())
        .then(callback);
}

// Render lên giao diện
function renderArts(arts) {
    let ulBlock = document.getElementById("album__block-content");
    let html = arts
        .map((art) => {
            return `<li class="album__item album__item-${art.id}">
            <figure class="album__thumb"><img class="album__img" src="${art.art_address}" alt=""></figure>
            <section class="album__body">
                <h2 class="album__name">${art.name}</h2>
                <div class = "album__icons">
                    <i class ="ti-pencil album__icon btn__edit" onclick = "handleEditArts(${art.id})"></i>
                    <i class ="ti-trash album__icon btn__delete" onclick ="handleDeleteArts(${art.id})"></i>
                </div>
                <p class="album__description">
                    ${art.description}
                </p>
            </section>
        </li>`;
        })
        .join("\n");

    ulBlock.innerHTML = html;
}

// CreateArts: tạo thêm danh mục mới
function handleCreateArts() {
    const createBtn = document.getElementById("create");

    createBtn.onclick = function () {
        const id = document.querySelector('input[name = "id"]').value;
        const name = document.querySelector('input[name = "name"]').value;
        const description = document.querySelector(
            'textarea[name = "description"]'
        ).value;
        const art_address = document.querySelector(
            'input[name = "address"]'
        ).value;

        let formData = {
            id,
            art_address,
            name,
            description,
        };

        createArts(formData, function () {
            getArts(renderArts);
        });
    };
}

function createArts(formData, callback) {
    let options = {
        method: "POST",
        body: JSON.stringify(formData),
    };

    fetch(artAPI, options)
        .then((response) => response.json())
        .then(callback);
}

// EditArts: chỉnh sửa thông tin
function handleEditArts(id) {
    showModalEdit();

    fetch(artAPI + "/" + id)
        .then((response) => response.json())
        .then((art) => {
            document.querySelector(".edit-id").value = art.id;
            document.querySelector(".edit-name").value = art.name;
            document.querySelector(".edit-description").value = art.description;
            document.querySelector(".edit-address").value = art.art_address;
        });
    editArts();
}

function editArts() {
    const editBtn = document.getElementById("edit");

    editBtn.addEventListener("click", function () {
        let id = document.querySelector(".edit-id").value;
        let name = document.querySelector(".edit-name").value;
        let description = document.querySelector(".edit-description").value;
        let art_address = document.querySelector(".edit-address").value;

        let formData = {
            id,
            art_address,
            name,
            description,
        };

        let options = {
            method: "PUT",
            body: JSON.stringify(formData),
        };

        fetch(artAPI + "/" + id, options)
            .then((response) => response.json)
            .then(getArts(renderArts));
    });
}

// deleteArts: Xoá danh mục theo id

function handleDeleteArts(id) {
    let options = {
        method: "DELETE",
    };

    fetch(artAPI + "/" + id, options)
        .then((response) => response.json())
        .then(function () {
            let artItem = document.querySelector(".album__item-" + id);

            if (artItem) {
                artItem.remove();
            }
        });
}

// Hiệu ứng carousel

const ulBlock = document.getElementById("album__block-content");
let currentHeight = 0;
const itemHeight = 385;

document.querySelector(".arrow-up").onclick = function () {
    const listsItem = document.querySelectorAll(".album__item");
    const totalLength = listsItem.length;
    const maxTranslateHeight = (totalLength - (totalLength - 1)) * itemHeight;

    if (currentHeight < maxTranslateHeight) {
        currentHeight += itemHeight;
        listsItem.forEach((item) => {
            item.style.transform = `translateY(-${currentHeight}px)`;
        });
    }
};

document.querySelector(".arrow-down").onclick = function () {
    const listsItem = document.querySelectorAll(".album__item");
    if (currentHeight > 0) {
        currentHeight -= itemHeight;
        listsItem.forEach((item) => {
            item.style.transform = `translateY(${currentHeight}px)`;
        });
    }
};

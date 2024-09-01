const addNewItem = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const modalEdit = document.querySelector(".modal-edit");
const closeBtn = document.querySelector(".btn__close");
const closeBtnEdit = document.querySelector(".btn__close-edit");
const editBtn = document.querySelector(".btn__edit");

// Mở và đóng Modal
function showModal() {
    modal.classList.add("open");
}
function closeModal() {
    modal.classList.remove("open");
}

// Mở đóng Modal Edit
function showModalEdit() {
    modalEdit.classList.add("open");
}
function closeModalEdit() {
    modalEdit.classList.remove("open");
}

// Event
addNewItem.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

closeBtnEdit.addEventListener("click", closeModalEdit);

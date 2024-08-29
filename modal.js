
const addNewItem = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.btn__close');

// Mở và đóng Modal
function showModal(){
    modal.classList.add('open');
}
function closeModal(){
    modal.classList.remove('open');
}

// Event
addNewItem.addEventListener('click',showModal);
closeBtn.addEventListener('click',closeModal);

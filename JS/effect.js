// Hiệu ứng carousel
let currentHeight = 0;
const itemHeight = 385;

document.querySelector(".arrow-down").onclick = function () {
    const listsItem = document.querySelectorAll(".album__item");
    const totalLength = listsItem.length;
    const maxTranslateHeight =
        totalLength % 3 === 0
            ? (Math.floor(totalLength / 3) - 2) * itemHeight
            : (Math.floor(totalLength / 3) - 1) * itemHeight;

    if (currentHeight < maxTranslateHeight) {
        currentHeight += itemHeight;
        listsItem.forEach((item) => {
            item.style.transform = `translateY(-${currentHeight}px)`;
        });
    }
};

document.querySelector(".arrow-up").onclick = function () {
    const listsItem = document.querySelectorAll(".album__item");

    if (currentHeight > 0) {
        currentHeight -= itemHeight;
        listsItem.forEach((item) => {
            item.style.transform = `translateY(-${currentHeight}px)`;
        });
    }
};

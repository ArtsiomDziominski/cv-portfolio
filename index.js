const frame = document.querySelector(".frame");
const dot = document.querySelector(".dot");

frame.addEventListener(`mousemove`, function (e) {
    dot.style.top = e.clientY + "px";
    dot.style.left = e.clientX + "px";
});

frame.addEventListener(`mouseleave`, function () {
    dot.style.top = `-30`;
    dot.style.left = `50%`;
});
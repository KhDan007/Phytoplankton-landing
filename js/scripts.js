const searchBtn = document.querySelector(".input-group .btn");
const searchPole = document.querySelector(".form-control");

searchPole.addEventListener("focusin", () => {
    searchBtn.classList.toggle("op1");
});
searchPole.addEventListener("focusout", () => {
    searchBtn.classList.toggle("op1");
});
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    let title = document.getElementById('111sas');
    let button = document.getElementById('222sas');
    button.onclick = function () {
        title.innerHTML = "Вы потрогали хуй";

    };
}
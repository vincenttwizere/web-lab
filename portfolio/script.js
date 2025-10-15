//making the navbar toggle work

document.getElementById('menu-toggle').onclick = function () {
    let nav = document.getElementById('navbar');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

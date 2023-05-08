// On pointe la navbar dans le HTML :
const navBar = document.getElementById("navbar");
// (pas obligatoire car les id sont deja reconnu dans JS)

// On stock la valeur du dernier scroll dans une variable :
let lastScroll = 0;

// Evénément au scroll :
window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    displayNavBar();
  } else {
    hideNavBar();
  }
  lastScroll = window.scrollY;
});

// Le contenu des fonction aurait pu etre directement écrit
// dans l'evenlistener du scroll ..

// Afficher la navbar :
function displayNavBar() {
  navBar.style.top = "0";
}

// Cahcher la navbar :
function hideNavBar() {
  navBar.style.top = "-60px";
}
